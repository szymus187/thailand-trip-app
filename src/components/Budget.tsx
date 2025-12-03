import { useState } from 'react';
import { useTripData } from '../hooks/useTripData';

export default function Budget() {
  const { tripData, updateBudgetActual, getTotalBudget } = useTripData();
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState('');

  const totalBudget = getTotalBudget();
  const remaining = totalBudget.planned - totalBudget.actual;
  const percentUsed = (totalBudget.actual / totalBudget.planned) * 100;

  const startEditing = (categoryName: string, currentValue: number) => {
    setEditingCategory(categoryName);
    setTempValue(currentValue.toString());
  };

  const saveEdit = (categoryName: string) => {
    const value = parseFloat(tempValue) || 0;
    updateBudgetActual(categoryName, value);
    setEditingCategory(null);
  };

  const cancelEdit = () => {
    setEditingCategory(null);
    setTempValue('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-5 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          💰 Budżet wycieczki
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Śledź swoje wydatki i zarządzaj budżetem
        </p>

        {/* Total Budget Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Planowany budżet</p>
              <p className="text-2xl font-bold text-gray-800">
                {totalBudget.planned.toLocaleString()} ฿
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Wydano</p>
              <p className="text-2xl font-bold text-thai-red">
                {totalBudget.actual.toLocaleString()} ฿
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Pozostało</p>
              <p className={`text-2xl font-bold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {remaining.toLocaleString()} ฿
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all ${
                percentUsed > 100
                  ? 'bg-red-500'
                  : percentUsed > 80
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(percentUsed, 100)}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            Wykorzystano {percentUsed.toFixed(1)}% budżetu
          </p>
        </div>

        {/* Budget Categories */}
        <div className="space-y-3">
          {tripData.budget.map((category) => {
            const isEditing = editingCategory === category.name;
            const categoryPercent = (category.actual / category.planned) * 100;

            return (
              <div
                key={category.name}
                className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    {isEditing ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') saveEdit(category.name);
                            if (e.key === 'Escape') cancelEdit();
                          }}
                        />
                        <button
                          onClick={() => saveEdit(category.name)}
                          className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                        >
                          ✓
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => startEditing(category.name, category.actual)}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        {category.actual > 0
                          ? `${category.actual.toLocaleString()} ฿`
                          : 'Dodaj wydatek'}
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          categoryPercent > 100
                            ? 'bg-red-500'
                            : categoryPercent > 80
                            ? 'bg-yellow-500'
                            : 'bg-blue-500'
                        }`}
                        style={{ width: `${Math.min(categoryPercent, 100)}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 w-24 text-right">
                    {category.planned.toLocaleString()} ฿ plan
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exchange Rate Helper */}
      <div className="bg-blue-50 rounded-lg p-5 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">💱 Kalkulator walut</h3>
        <p className="text-sm text-gray-600 mb-2">
          Przybliżony kurs: 1 PLN ≈ 8.3 THB
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-3 rounded">
            <p className="text-gray-600 mb-1">Total budżet PLN</p>
            <p className="font-bold text-lg">
              ~{Math.round(totalBudget.planned / 8.3).toLocaleString()} PLN
            </p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="text-gray-600 mb-1">Wydano PLN</p>
            <p className="font-bold text-lg text-thai-red">
              ~{Math.round(totalBudget.actual / 8.3).toLocaleString()} PLN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
