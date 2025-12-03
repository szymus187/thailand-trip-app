import { useState, useEffect } from 'react';
import { useTripData } from '../hooks/useTripData';

export default function Today() {
  const { tripData } = useTripData();
  const [currentDay, setCurrentDay] = useState(1);

  // Auto-detect current day based on date (you can improve this)
  useEffect(() => {
    // For demo, we'll let user select. In production, calculate based on trip start date
  }, []);

  const todayItinerary = tripData.itinerary.find(d => d.day === currentDay);

  if (!todayItinerary) return null;

  const totalBudgetToday = todayItinerary.timeSlots.reduce((sum, slot) => sum + (slot.cost || 0), 0);
  const nextActivity = todayItinerary.timeSlots.find(() => {
    // Simple logic: find first activity (in production, check current time)
    return true;
  });

  // Quick phrases relevant for today
  const todayPhrases = [
    { thai: 'เท่าไหร่', phonetic: 'Tao rai?', english: 'Ile kosztuje?' },
    { thai: 'ขอบคุณ', phonetic: 'Khob khun krap/ka', english: 'Dziękuję' },
    { thai: 'ห้องน้ำ', phonetic: 'Hong nam', english: 'Toaleta' },
    { thai: 'ไม่เผ็ด', phonetic: 'Mai phet', english: 'Nie ostre' },
  ];

  return (
    <div className="space-y-6">
      {/* Day Selector */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setCurrentDay(Math.max(1, currentDay - 1))}
            disabled={currentDay === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            ← Poprzedni
          </button>
          <h2 className="text-xl font-bold text-thai-blue">
            Dzień {currentDay} / 14
          </h2>
          <button
            onClick={() => setCurrentDay(Math.min(14, currentDay + 1))}
            disabled={currentDay === 14}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Następny →
          </button>
        </div>
      </div>

      {/* Daily Overview */}
      <div className="bg-gradient-to-r from-thai-blue to-thai-red text-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">🌅</span>
          <div>
            <h1 className="text-2xl font-bold">{todayItinerary.title}</h1>
            <p className="text-blue-100">{todayItinerary.date}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-2xl">📍</span>
          <span className="text-lg">{todayItinerary.location}</span>
        </div>
      </div>

      {/* Next Up */}
      {nextActivity && (
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5 shadow-md">
          <h3 className="font-semibold text-green-800 mb-3 flex items-center">
            <span className="text-2xl mr-2">⏰</span>
            Następne na liście
          </h3>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-lg text-gray-700">
                {nextActivity.start} - {nextActivity.end}
              </span>
              {nextActivity.cost && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                  {nextActivity.cost} ฿
                </span>
              )}
            </div>
            <h4 className="font-bold text-xl text-gray-800 mb-2">
              {nextActivity.activity}
            </h4>
            {nextActivity.description && (
              <p className="text-gray-600 text-sm">{nextActivity.description}</p>
            )}
          </div>
        </div>
      )}

      {/* Budget Today */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">💰</span>
          Budżet na dziś
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Planowany</p>
            <p className="text-2xl font-bold text-thai-blue">
              {totalBudgetToday} ฿
            </p>
            <p className="text-xs text-gray-500 mt-1">
              ~{Math.round(totalBudgetToday / 8.3)} PLN
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Zostało</p>
            <p className="text-2xl font-bold text-green-600">
              {totalBudgetToday} ฿
            </p>
            <p className="text-xs text-gray-500 mt-1">100%</p>
          </div>
        </div>
      </div>

      {/* Quick Phrases for Today */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-5">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">💬</span>
          Przydatne dziś
        </h3>
        <div className="space-y-2">
          {todayPhrases.map((phrase, idx) => (
            <button
              key={idx}
              onClick={() => {
                navigator.clipboard.writeText(phrase.phonetic);
                alert('Skopiowano: ' + phrase.phonetic);
              }}
              className="w-full bg-white rounded-lg p-3 text-left hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-lg font-thai text-gray-800">{phrase.thai}</div>
                  <div className="text-sm font-semibold text-purple-600">
                    {phrase.phonetic}
                  </div>
                  <div className="text-xs text-gray-600">{phrase.english}</div>
                </div>
                <div className="text-2xl">📋</div>
              </div>
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Tap to copy to clipboard
        </p>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">📅</span>
          Harmonogram dnia
        </h3>
        <div className="space-y-3">
          {todayItinerary.timeSlots.map((slot, idx) => (
            <div
              key={idx}
              className="border-l-4 border-thai-blue pl-4 py-2 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-sm text-gray-600">
                  {slot.start} - {slot.end}
                </span>
                {slot.cost && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {slot.cost} ฿
                  </span>
                )}
              </div>
              <h4 className="font-semibold text-gray-800">{slot.activity}</h4>
              {slot.location && (
                <p className="text-xs text-gray-500 mt-1">📍 {slot.location}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Important Alerts for Today */}
      <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-5 shadow-md">
        <h3 className="font-semibold text-orange-800 mb-3 flex items-center">
          <span className="text-2xl mr-2">⚠️</span>
          Ważne dzisiaj
        </h3>
        <div className="space-y-2">
          {currentDay === 1 && (
            <div className="bg-white rounded-lg p-3">
              <p className="text-sm">
                <strong>💡 Tip:</strong> Kup SIM kartę od razu na lotnisku (299฿)
              </p>
            </div>
          )}
          {currentDay === 2 && (
            <>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm">
                  <strong>⚠️ Scam Alert:</strong> Uważaj na "Palace is closed" przed Grand Palace
                </p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm">
                  <strong>👔 Dress code:</strong> Długie spodnie i zakryte ramiona w świątyniach!
                </p>
              </div>
            </>
          )}
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm">
              <strong>💰 Money tip:</strong> Wypłacaj z żółtych bankomatów (Krungsri) - bez opłat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
