export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  category: 'document' | 'booking' | 'app' | 'other';
}

export interface TimeSlot {
  start: string;
  end: string;
  activity: string;
  description?: string;
  cost?: number;
  location?: string;
  tips?: string[];
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  location: string;
  budget: number;
  timeSlots: TimeSlot[];
  notes?: string[];
}

export interface PackingItem {
  id: string;
  name: string;
  category: 'documents' | 'clothes' | 'electronics' | 'toiletries' | 'other';
  packed: boolean;
  quantity?: string;
}

export interface BudgetCategory {
  name: string;
  planned: number;
  actual: number;
}

export interface EmergencyContact {
  name: string;
  number: string;
  type: 'police' | 'medical' | 'embassy' | 'other';
}

export interface AppRecommendation {
  name: string;
  description: string;
  category: 'transport' | 'booking' | 'navigation' | 'communication' | 'utility';
  link?: string;
}

export interface ThaiPhrase {
  thai: string;
  phonetic: string;
  english: string;
  category: 'greetings' | 'food' | 'shopping' | 'emergency' | 'directions' | 'general';
}

export interface CulturalRule {
  title: string;
  description: string;
  icon: string;
  importance: 'critical' | 'important' | 'good-to-know';
}

export interface FoodSafetyTip {
  title: string;
  description: string;
  type: 'safe' | 'caution' | 'avoid';
}

export interface ScamWarning {
  name: string;
  description: string;
  howToAvoid: string;
}

export interface TravelHack {
  title: string;
  description: string;
  category: 'money' | 'transport' | 'accommodation' | 'general';
}

export interface TripData {
  checklist: ChecklistItem[];
  itinerary: DayItinerary[];
  packing: PackingItem[];
  budget: BudgetCategory[];
  emergencyContacts: EmergencyContact[];
  apps: AppRecommendation[];
  tips: string[];
  thaiPhrases: ThaiPhrase[];
  culturalRules: CulturalRule[];
  foodSafety: FoodSafetyTip[];
  scams: ScamWarning[];
  travelHacks: TravelHack[];
}
