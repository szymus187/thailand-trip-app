import { useTripData } from '../hooks/useTripData';

const categoryLabels = {
  documents: '📄 Dokumenty',
  clothes: '👕 Ubrania',
  electronics: '🔌 Elektronika',
  toiletries: '🧴 Kosmetyki',
  other: '📦 Inne',
};

const categoryIcons = {
  documents: '📄',
  clothes: '👕',
  electronics: '🔌',
  toiletries: '🧴',
  other: '📦',
};

export default function Packing() {
  const { tripData, togglePackingItem } = useTripData();

  const grouped = tripData.packing.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof tripData.packing>);

  const totalPacked = tripData.packing.filter((i) => i.packed).length;
  const totalItems = tripData.packing.length;
  const percentPacked = (totalPacked / totalItems) * 100;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-5 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🎒 Lista pakowania
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Minimalistyczna lista - zabierz tylko to, czego naprawdę potrzebujesz!
        </p>

        {/* Progress */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-semibold text-gray-800">Postęp pakowania</h3>
              <p className="text-sm text-gray-600 mt-1">
                {totalPacked} z {totalItems} przedmiotów spakowanych
              </p>
            </div>
            <div className="text-4xl">
              {percentPacked === 100 ? '✅' : '🎒'}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
              style={{ width: `${percentPacked}%` }}
            />
          </div>
        </div>

        {/* Packing List by Category */}
        {Object.entries(grouped).map(([category, items]) => {
          const packedInCategory = items.filter((i) => i.packed).length;

          return (
            <div key={category} className="mb-6 last:mb-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-xl">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </span>
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
                <span className="text-sm text-gray-500">
                  {packedInCategory}/{items.length}
                </span>
              </div>

              <div className="space-y-2">
                {items.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={item.packed}
                      onChange={() => togglePackingItem(item.id)}
                      className="mt-1 w-5 h-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <span
                        className={`${
                          item.packed
                            ? 'text-gray-400 line-through'
                            : 'text-gray-700 font-medium'
                        }`}
                      >
                        {item.name}
                      </span>
                      {item.quantity && (
                        <span className="ml-2 text-xs text-gray-500">
                          ({item.quantity})
                        </span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Packing Tips */}
      <div className="bg-yellow-50 rounded-lg p-5 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
          <span className="text-xl mr-2">💡</span>
          Wskazówki pakowania
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✈️ <strong>Bagaż podręczny:</strong> 1 plecak 40L wystarczy!</li>
          <li>👕 <strong>Minimalizm:</strong> Będziesz prać co 3-4 dni</li>
          <li>🧴 <strong>Kosmetyki:</strong> Kup na miejscu (taniej!)</li>
          <li>🔌 <strong>Adapter:</strong> Tajlandia używa wtyczek typu A, B, C</li>
          <li>💊 <strong>Leki:</strong> Zabierz podstawowe, reszta jest dostępna</li>
          <li>📱 <strong>Elektronika:</strong> Powerbank to must-have!</li>
        </ul>
      </div>
    </div>
  );
}
