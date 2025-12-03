import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { TripData } from '../types';
import { initialTripData } from '../data/tripData';

interface TripContextType {
  tripData: TripData;
  toggleChecklistItem: (id: string) => void;
  togglePackingItem: (id: string) => void;
  updateBudgetActual: (categoryName: string, amount: number) => void;
  resetData: () => void;
  getTotalBudget: () => { planned: number; actual: number };
  getCompletionStats: () => {
    checklist: { completed: number; total: number };
    packing: { packed: number; total: number };
  };
}

const TripContext = createContext<TripContextType | undefined>(undefined);

const STORAGE_KEY = 'thailand-trip-data';

export function TripProvider({ children }: { children: ReactNode }) {
  const [tripData, setTripData] = useState<TripData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsedData = JSON.parse(saved);
      // Merge saved data with initial data to ensure all new fields exist
      return {
        ...initialTripData,
        ...parsedData,
        // Always use the latest reference data from initialTripData
        thaiPhrases: initialTripData.thaiPhrases,
        culturalRules: initialTripData.culturalRules,
        foodSafety: initialTripData.foodSafety,
        scams: initialTripData.scams,
        travelHacks: initialTripData.travelHacks,
        apps: initialTripData.apps,
        tips: initialTripData.tips,
      };
    }
    return initialTripData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tripData));
  }, [tripData]);

  const toggleChecklistItem = (id: string) => {
    setTripData(prev => ({
      ...prev,
      checklist: prev.checklist.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    }));
  };

  const togglePackingItem = (id: string) => {
    setTripData(prev => ({
      ...prev,
      packing: prev.packing.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      ),
    }));
  };

  const updateBudgetActual = (categoryName: string, amount: number) => {
    setTripData(prev => ({
      ...prev,
      budget: prev.budget.map(cat =>
        cat.name === categoryName ? { ...cat, actual: amount } : cat
      ),
    }));
  };

  const resetData = () => {
    setTripData(initialTripData);
    localStorage.removeItem(STORAGE_KEY);
  };

  const getTotalBudget = () => {
    return tripData.budget.reduce(
      (acc, cat) => ({
        planned: acc.planned + cat.planned,
        actual: acc.actual + cat.actual,
      }),
      { planned: 0, actual: 0 }
    );
  };

  const getCompletionStats = () => {
    return {
      checklist: {
        completed: tripData.checklist.filter(item => item.completed).length,
        total: tripData.checklist.length,
      },
      packing: {
        packed: tripData.packing.filter(item => item.packed).length,
        total: tripData.packing.length,
      },
    };
  };

  return (
    <TripContext.Provider
      value={{
        tripData,
        toggleChecklistItem,
        togglePackingItem,
        updateBudgetActual,
        resetData,
        getTotalBudget,
        getCompletionStats,
      }}
    >
      {children}
    </TripContext.Provider>
  );
}

export function useTripData() {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripData must be used within TripProvider');
  }
  return context;
}
