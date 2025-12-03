import { useTripData } from '../hooks/useTripData';

const categoryLabels = {
  document: '📄 Dokumenty',
  booking: '🎫 Rezerwacje',
  app: '📱 Aplikacje',
  other: '📌 Inne',
};

export default function Checklist() {
  const { tripData, toggleChecklistItem } = useTripData();

  const grouped = tripData.checklist.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof tripData.checklist>);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-5 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          ✅ Lista zadań przed wyjazdem
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Przygotuj się na wyjazd! Odznacz zadania w miarę ich realizacji.
        </p>

        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-6 last:mb-0">
            <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h3>
            <div className="space-y-2">
              {items.map((item) => (
                <label
                  key={item.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleChecklistItem(item.id)}
                    className="mt-1 w-5 h-5 text-green-500 rounded focus:ring-2 focus:ring-green-500"
                  />
                  <span
                    className={`flex-1 ${
                      item.completed
                        ? 'text-gray-400 line-through'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-5 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800">Postęp przygotowań</h3>
            <p className="text-sm text-gray-600 mt-1">
              {tripData.checklist.filter((i) => i.completed).length} z{' '}
              {tripData.checklist.length} zadań wykonanych
            </p>
          </div>
          <div className="text-4xl">
            {tripData.checklist.filter((i) => i.completed).length ===
            tripData.checklist.length
              ? '🎉'
              : '📝'}
          </div>
        </div>
      </div>
    </div>
  );
}
