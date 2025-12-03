import { useState } from 'react';
import { useTripData } from '../hooks/useTripData';

const categoryIcons = {
  transport: '🚗',
  booking: '🎫',
  navigation: '🗺️',
  communication: '💬',
  utility: '🔧',
};

export default function Info() {
  const { tripData } = useTripData();
  const [activeTab, setActiveTab] = useState<'phrases' | 'culture' | 'food' | 'scams' | 'hacks' | 'apps'>('phrases');

  return (
    <div className="space-y-6">
      {/* Emergency Contacts - Always visible */}
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-5 shadow-md">
        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
          <span className="text-3xl mr-2">🚨</span>
          Numery alarmowe
        </h2>
        <div className="space-y-3">
          {tripData.emergencyContacts.map((contact, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{contact.name}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {contact.type === 'police' && '👮 Policja'}
                  {contact.type === 'medical' && '🏥 Medyczne'}
                  {contact.type === 'embassy' && '🏛️ Ambasada'}
                </p>
              </div>
              <a
                href={`tel:${contact.number}`}
                className="px-4 py-2 bg-red-600 text-white rounded-lg font-mono font-bold hover:bg-red-700 transition-colors"
              >
                {contact.number}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Info Tabs Navigation */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200 overflow-x-auto">
          <div className="flex min-w-max">
            {[
              { id: 'phrases', label: 'Zwroty', icon: '💬' },
              { id: 'culture', label: 'Kultura', icon: '🙏' },
              { id: 'food', label: 'Jedzenie', icon: '🍜' },
              { id: 'scams', label: 'Oszustwa', icon: '⚠️' },
              { id: 'hacks', label: 'Hacki', icon: '💡' },
              { id: 'apps', label: 'Aplikacje', icon: '📱' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 px-4 py-3 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'bg-thai-blue text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-1">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5">
          {/* Thai Phrases Tab */}
          {activeTab === 'phrases' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                💬 Podstawowe zwroty po tajsku
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Mężczyźni dodają "krap", kobiety "ka" na końcu zdań
              </p>

              {['greetings', 'food', 'shopping', 'emergency', 'directions', 'general'].map((cat) => {
                const phrases = (tripData.thaiPhrases || []).filter((p) => p.category === cat);
                if (phrases.length === 0) return null;

                return (
                  <div key={cat} className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3 capitalize">
                      {cat === 'greetings' && '👋 Powitania'}
                      {cat === 'food' && '🍜 Jedzenie'}
                      {cat === 'shopping' && '🛍️ Zakupy'}
                      {cat === 'emergency' && '🚨 Nagłe wypadki'}
                      {cat === 'directions' && '🗺️ Kierunki'}
                      {cat === 'general' && '💬 Ogólne'}
                    </h4>
                    <div className="space-y-2">
                      {phrases.map((phrase, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="font-thai text-lg text-gray-800">
                                {phrase.thai}
                              </div>
                              <div className="text-sm font-semibold text-thai-blue mt-1">
                                {phrase.phonetic}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                {phrase.english}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Cultural Rules Tab */}
          {activeTab === 'culture' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🙏 Etykieta i zasady kulturowe
              </h3>
              <div className="space-y-3">
                {(tripData.culturalRules || []).map((rule, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg p-4 ${
                      rule.importance === 'critical'
                        ? 'bg-red-50 border-2 border-red-200'
                        : rule.importance === 'important'
                        ? 'bg-yellow-50 border-2 border-yellow-200'
                        : 'bg-blue-50 border border-blue-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{rule.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-800">
                            {rule.title}
                          </h4>
                          {rule.importance === 'critical' && (
                            <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                              KRYTYCZNE
                            </span>
                          )}
                          {rule.importance === 'important' && (
                            <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">
                              WAŻNE
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-700">{rule.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Food Safety Tab */}
          {activeTab === 'food' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🍜 Bezpieczeństwo jedzenia ulicznego
              </h3>

              {/* Safe Foods */}
              <div className="mb-6">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                  <span className="mr-2">✅</span>
                  Bezpieczne opcje
                </h4>
                <div className="space-y-2">
                  {(tripData.foodSafety || [])
                    .filter((f) => f.type === 'safe')
                    .map((food, idx) => (
                      <div key={idx} className="bg-green-50 rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 text-sm">
                          {food.title}
                        </h5>
                        <p className="text-sm text-gray-700 mt-1">
                          {food.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Caution */}
              <div className="mb-6">
                <h4 className="font-semibold text-yellow-700 mb-3 flex items-center">
                  <span className="mr-2">⚠️</span>
                  Ostrożnie
                </h4>
                <div className="space-y-2">
                  {(tripData.foodSafety || [])
                    .filter((f) => f.type === 'caution')
                    .map((food, idx) => (
                      <div key={idx} className="bg-yellow-50 rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 text-sm">
                          {food.title}
                        </h5>
                        <p className="text-sm text-gray-700 mt-1">
                          {food.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Avoid */}
              <div>
                <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                  <span className="mr-2">❌</span>
                  Unikaj
                </h4>
                <div className="space-y-2">
                  {(tripData.foodSafety || [])
                    .filter((f) => f.type === 'avoid')
                    .map((food, idx) => (
                      <div key={idx} className="bg-red-50 rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 text-sm">
                          {food.title}
                        </h5>
                        <p className="text-sm text-gray-700 mt-1">
                          {food.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Scams Tab */}
          {activeTab === 'scams' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                ⚠️ Popularne oszustwa i jak ich unikać
              </h3>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-orange-800">
                  <strong>Ważne:</strong> Większość Tajów to uczciwi ludzie! Te
                  oszustwa dotyczą głównie turystycznych obszarów.
                </p>
              </div>
              <div className="space-y-3">
                {(tripData.scams || []).map((scam, idx) => (
                  <div
                    key={idx}
                    className="bg-red-50 border border-red-200 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                      <span className="mr-2">⚠️</span>
                      {scam.name}
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      {scam.description}
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3 mt-2">
                      <p className="text-xs font-semibold text-green-800 mb-1">
                        Jak unikać:
                      </p>
                      <p className="text-sm text-green-900">{scam.howToAvoid}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Travel Hacks Tab */}
          {activeTab === 'hacks' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                💡 Praktyczne hacki podróżne
              </h3>

              {['money', 'transport', 'accommodation', 'general'].map((cat) => {
                const hacks = (tripData.travelHacks || []).filter((h) => h.category === cat);
                if (hacks.length === 0) return null;

                return (
                  <div key={cat} className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3">
                      {cat === 'money' && '💰 Pieniądze'}
                      {cat === 'transport' && '🚗 Transport'}
                      {cat === 'accommodation' && '🏨 Noclegi'}
                      {cat === 'general' && '📌 Ogólne'}
                    </h4>
                    <div className="space-y-2">
                      {hacks.map((hack, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 hover:shadow-md transition-shadow"
                        >
                          <h5 className="font-semibold text-gray-800 text-sm mb-1">
                            💡 {hack.title}
                          </h5>
                          <p className="text-sm text-gray-700">{hack.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Apps Tab */}
          {activeTab === 'apps' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                📱 Niezbędne aplikacje
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Pobierz te aplikacje przed wyjazdem i skonfiguruj offline mode
              </p>
              <div className="space-y-3">
                {tripData.apps.map((app, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">
                            {categoryIcons[app.category]}
                          </span>
                          <h3 className="font-semibold text-gray-800">{app.name}</h3>
                        </div>
                        <p className="text-sm text-gray-600">{app.description}</p>
                        <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {app.category === 'transport' && 'Transport'}
                          {app.category === 'booking' && 'Rezerwacje'}
                          {app.category === 'navigation' && 'Nawigacja'}
                          {app.category === 'communication' && 'Komunikacja'}
                          {app.category === 'utility' && 'Narzędzia'}
                        </span>
                      </div>
                      {app.link && (
                        <a
                          href={app.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 px-3 py-1 bg-thai-blue text-white text-sm rounded hover:bg-opacity-90"
                        >
                          Otwórz
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Useful Links */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">
                  🔗 Przydatne strony
                </h4>
                <div className="space-y-2">
                  <a
                    href="https://www.seat61.com/Thailand.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-blue-600 hover:underline">
                      🚆 Seat61.com
                    </span>
                    <span className="text-sm text-gray-600 ml-2">
                      - Rozkład pociągów
                    </span>
                  </a>
                  <a
                    href="https://12go.asia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-blue-600 hover:underline">
                      🚌 12go.asia
                    </span>
                    <span className="text-sm text-gray-600 ml-2">
                      - Bilety autobusowe
                    </span>
                  </a>
                  <a
                    href="https://agoda.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-blue-600 hover:underline">
                      🏨 Agoda.com
                    </span>
                    <span className="text-sm text-gray-600 ml-2">
                      - Noclegi last minute
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Golden Tips - Always visible */}
      <div className="bg-gradient-to-r from-thai-gold to-yellow-200 rounded-lg p-5 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">🙏</span>
          Złote zasady Tajlandii
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tripData.tips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-80 rounded-lg p-3 text-sm text-gray-700"
            >
              <span className="font-medium">• {tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
