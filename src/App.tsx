import { useState } from 'react';
import { TripProvider } from './hooks/useTripData';
import Dashboard from './components/Dashboard';
import Today from './components/Today';
import Survival from './components/Survival';
import Checklist from './components/Checklist';
import Itinerary from './components/Itinerary';
import Budget from './components/Budget';
import Packing from './components/Packing';
import Info from './components/Info';

type Tab = 'today' | 'survival' | 'dashboard' | 'checklist' | 'itinerary' | 'budget' | 'packing' | 'info';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('today');

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'today', label: 'Dzisiaj', icon: '📍' },
    { id: 'survival', label: 'SOS', icon: '🆘' },
    { id: 'dashboard', label: 'Start', icon: '🏠' },
    { id: 'itinerary', label: 'Plan', icon: '📅' },
    { id: 'budget', label: 'Budżet', icon: '💰' },
    { id: 'checklist', label: 'Zadania', icon: '✅' },
    { id: 'packing', label: 'Plecak', icon: '🎒' },
    { id: 'info', label: 'Wiedza', icon: '💡' },
  ];

  return (
    <TripProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-thai-blue via-thai-red to-thai-gold bg-clip-text text-transparent">
              🇹🇭 Wycieczka do Tajlandii 2025
            </h1>
            <p className="text-center text-gray-600 text-sm mt-1">14-dniowa przygoda solo backpacking</p>
          </div>

          {/* Navigation */}
          <nav className="border-t border-gray-200 overflow-x-auto">
            <div className="max-w-6xl mx-auto px-2">
              <div className="flex gap-1 md:gap-2 py-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex-1 min-w-max px-3 md:px-4 py-2 rounded-lg font-medium text-sm transition-all
                      ${
                        activeTab === tab.id
                          ? 'bg-thai-blue text-white shadow-md'
                          : 'text-gray-600 hover:bg-gray-100'
                      }
                    `}
                  >
                    <span className="mr-1">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-6">
          {activeTab === 'today' && <Today />}
          {activeTab === 'survival' && <Survival />}
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'checklist' && <Checklist />}
          {activeTab === 'itinerary' && <Itinerary />}
          {activeTab === 'budget' && <Budget />}
          {activeTab === 'packing' && <Packing />}
          {activeTab === 'info' && <Info />}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-12 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 text-sm">
            <p>🌴 Sawadee krap! Życzę niesamowitej podróży! 🇹🇭</p>
            <p className="mt-2 text-xs">Dane zapisywane lokalnie w przeglądarce</p>
          </div>
        </footer>
      </div>
    </TripProvider>
  );
}

export default App;
