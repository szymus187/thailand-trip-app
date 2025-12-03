import { useState } from 'react';
import { useTripData } from '../hooks/useTripData';

export default function Itinerary() {
  const { tripData } = useTripData();
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-5 shadow-md mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          📅 Plan dnia po dniu
        </h2>
        <p className="text-gray-600 text-sm">
          Szczegółowy harmonogram 14-dniowej wycieczki
        </p>
      </div>

      {tripData.itinerary.map((day) => {
        const isExpanded = expandedDay === day.day;
        const totalCost = day.timeSlots.reduce((sum, slot) => sum + (slot.cost || 0), 0);

        return (
          <div
            key={day.day}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all"
          >
            {/* Day Header */}
            <button
              onClick={() => toggleDay(day.day)}
              className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl font-bold text-thai-blue">
                    Dzień {day.day}
                  </span>
                  <span className="text-sm text-gray-500">{day.date}</span>
                </div>
                <h3 className="font-semibold text-gray-800">{day.title}</h3>
                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                  <span>📍 {day.location}</span>
                  <span>💰 {totalCost} bahtów</span>
                </div>
              </div>
              <div className="text-2xl transition-transform duration-200" style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                ▼
              </div>
            </button>

            {/* Day Details */}
            {isExpanded && (
              <div className="border-t border-gray-200 p-5 bg-gray-50">
                <div className="space-y-4">
                  {day.timeSlots.map((slot, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-sm text-gray-500">
                              {slot.start} - {slot.end}
                            </span>
                            {slot.cost && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                {slot.cost} ฿
                              </span>
                            )}
                          </div>
                          <h4 className="font-semibold text-gray-800">
                            {slot.activity}
                          </h4>
                          {slot.location && (
                            <p className="text-sm text-gray-600 mt-1">
                              📍 {slot.location}
                            </p>
                          )}
                        </div>
                      </div>

                      {slot.description && (
                        <p className="text-sm text-gray-700 mt-2">
                          {slot.description}
                        </p>
                      )}

                      {slot.tips && slot.tips.length > 0 && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                          <p className="text-xs font-semibold text-blue-900 mb-2">
                            💡 Wskazówki:
                          </p>
                          <ul className="space-y-1">
                            {slot.tips.map((tip, tipIdx) => (
                              <li
                                key={tipIdx}
                                className="text-xs text-blue-800"
                              >
                                • {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {day.notes && day.notes.length > 0 && (
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm font-semibold text-yellow-900 mb-2">
                      📝 Dodatkowe notatki:
                    </p>
                    <ul className="space-y-1">
                      {day.notes.map((note, noteIdx) => (
                        <li key={noteIdx} className="text-sm text-yellow-800">
                          • {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
