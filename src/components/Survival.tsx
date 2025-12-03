import { useTripData } from '../hooks/useTripData';

export default function Survival() {
  const { tripData } = useTripData();

  const emergencyPhrases = (tripData.thaiPhrases || []).filter(
    p => p.category === 'emergency'
  );

  const topScams = (tripData.scams || []).slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <span className="text-4xl mr-3">🆘</span>
          Survival Kit
        </h1>
        <p className="text-red-100">
          Najważniejsze informacje w sytuacjach awaryjnych
        </p>
      </div>

      {/* Emergency Contacts - BIG BUTTONS */}
      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-5 shadow-md">
        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
          <span className="text-3xl mr-2">📞</span>
          ZADZWOŃ NATYCHMIAST
        </h2>
        <div className="space-y-3">
          {tripData.emergencyContacts.map((contact, idx) => (
            <a
              key={idx}
              href={`tel:${contact.number}`}
              className="block bg-red-600 hover:bg-red-700 text-white rounded-lg p-5 transition-colors shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-90 mb-1">
                    {contact.type === 'police' && '👮 POLICJA'}
                    {contact.type === 'medical' && '🚑 POGOTOWIE'}
                    {contact.type === 'embassy' && '🏛️ AMBASADA'}
                  </div>
                  <div className="text-2xl font-bold">{contact.name}</div>
                </div>
                <div className="text-4xl font-mono font-black">
                  {contact.number}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* SOS Phrases */}
      <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-5 shadow-md">
        <h2 className="text-2xl font-bold text-orange-800 mb-4 flex items-center">
          <span className="text-3xl mr-2">🗣️</span>
          ZWROTY RATUNKOWE
        </h2>
        <p className="text-sm text-orange-700 mb-4">
          Tap aby skopiować - pokaż komuś na telefonie!
        </p>
        <div className="space-y-3">
          {emergencyPhrases.map((phrase, idx) => (
            <button
              key={idx}
              onClick={() => {
                navigator.clipboard.writeText(`${phrase.thai} (${phrase.phonetic})`);
                alert('✓ Skopiowano! Możesz pokazać komuś');
              }}
              className="w-full bg-white border-2 border-orange-200 rounded-lg p-4 text-left hover:shadow-lg hover:border-orange-400 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-thai text-red-600">
                  {phrase.thai}
                </div>
                <div className="text-3xl">📋</div>
              </div>
              <div className="text-xl font-bold text-orange-600 mb-1">
                {phrase.phonetic}
              </div>
              <div className="text-gray-700">{phrase.english}</div>
            </button>
          ))}

          {/* Additional critical phrases */}
          <button
            onClick={() => {
              navigator.clipboard.writeText('I need a doctor (ต้องการหมอ - Tong-gan mor)');
              alert('✓ Skopiowano!');
            }}
            className="w-full bg-white border-2 border-orange-200 rounded-lg p-4 text-left hover:shadow-lg hover:border-orange-400 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl font-thai text-red-600">ต้องการหมอ</div>
              <div className="text-3xl">📋</div>
            </div>
            <div className="text-xl font-bold text-orange-600 mb-1">
              Tong-gan mor
            </div>
            <div className="text-gray-700">Potrzebuję lekarza</div>
          </button>
        </div>
      </div>

      {/* Quick Scam Check */}
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-5 shadow-md">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center">
          <span className="text-3xl mr-2">⚠️</span>
          CZY TO OSZUSTWO?
        </h2>
        <div className="bg-white rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Najczęstsze scamy:</strong>
          </p>
          <ul className="space-y-2 text-sm">
            {topScams.map((scam, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-500 font-bold">⚠️</span>
                <div>
                  <strong className="text-red-700">{scam.name}</strong>
                  <p className="text-gray-600 text-xs mt-1">
                    {scam.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-xs text-green-800">
            <strong>💡 Złota zasada:</strong> Jeśli coś brzmi "too good to be true" -
            prawdopodobnie to scam. Zaufaj instynktowi!
          </p>
        </div>
      </div>

      {/* What to Do If... */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
          <span className="text-3xl mr-2">🆘</span>
          CO ROBIĆ GDY...
        </h2>
        <div className="space-y-3">
          <details className="bg-white rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold text-gray-800 flex items-center gap-2">
              <span>🏥</span> Jestem chory/a
            </summary>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <p>1. Zadzwoń na pogotowie: <strong className="text-red-600">1669</strong></p>
              <p>2. Lub idź do najbliższego szpitala (Hospital = "Rohng phayaban")</p>
              <p>3. Pokaż kartę ubezpieczenia podróżnego</p>
              <p>4. Zadzwoń do ubezpieczyciela (numer na karcie)</p>
            </div>
          </details>

          <details className="bg-white rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold text-gray-800 flex items-center gap-2">
              <span>👮</span> Okradziono mnie
            </summary>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <p>1. Zadzwoń na policję turystyczną: <strong className="text-red-600">1155</strong> (mówią po angielsku!)</p>
              <p>2. Zgłoś to w najbliższej stacji policji</p>
              <p>3. Uzyskaj "Police Report" (potrzebne do ubezpieczenia)</p>
              <p>4. Zablokuj karty: +48 801 123 123 (Visa/MC)</p>
              <p>5. Zgłoś ubezpieczycielowi</p>
            </div>
          </details>

          <details className="bg-white rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold text-gray-800 flex items-center gap-2">
              <span>🛂</span> Zgubiłem paszport
            </summary>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <p>1. Zgłoś na policję (potrzebny Police Report)</p>
              <p>2. Zadzwoń do Ambasady: <strong className="text-blue-600">+66 2 205 4200</strong></p>
              <p>3. Przygotuj: kopię paszportu, zdjęcia, Police Report</p>
              <p>4. Ambasada wystawi dokument tymczasowy (Emergency Travel Document)</p>
            </div>
          </details>

          <details className="bg-white rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold text-gray-800 flex items-center gap-2">
              <span>🗺️</span> Zgubiłem się
            </summary>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <p>1. Zachowaj spokój</p>
              <p>2. Pokaż komuś adres hostelu na telefonie</p>
              <p>3. Użyj Grab/Bolt do powrotu (wpisz adres)</p>
              <p>4. Lub pokaż taksówkarzowi: "Chan hai pai" (zgubiłem się) + adres</p>
            </div>
          </details>

          <details className="bg-white rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold text-gray-800 flex items-center gap-2">
              <span>💳</span> Nie działają karty/bankomaty
            </summary>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <p>1. Spróbuj innego bankomatu (Krungsri = żółty, najlepszy)</p>
              <p>2. Sprawdź czy karta nie została zablokowana (zadzwoń do banku)</p>
              <p>3. Niektóre sklepy: 7-Eleven, restauracje przyjmują karty</p>
              <p>4. Western Union jako ostateczność</p>
            </div>
          </details>
        </div>
      </div>

      {/* Insurance Info */}
      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5 shadow-md">
        <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
          <span className="text-3xl mr-2">🛡️</span>
          UBEZPIECZENIE
        </h2>
        <div className="bg-white rounded-lg p-4">
          <p className="text-sm text-gray-700 mb-3">
            <strong>Ważne numery ubezpieczyciela:</strong>
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Numer polisy:</span>
              <span className="font-mono font-semibold">__________</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Assistance 24/7:</span>
              <span className="font-mono font-semibold">__________</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            💡 Zapisz numery w telefonie PRZED wyjazdem!
          </p>
        </div>
      </div>

      {/* Basic Safety Rules */}
      <div className="bg-gray-50 rounded-lg p-5 shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          🛡️ Podstawowe zasady bezpieczeństwa
        </h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span>✓</span>
            <span>Zawsze miej kopię paszportu (w chmurze + wydruk)</span>
          </li>
          <li className="flex items-start gap-2">
            <span>✓</span>
            <span>Nie pokazuj dużej ilości gotówki publicznie</span>
          </li>
          <li className="flex items-start gap-2">
            <span>✓</span>
            <span>Używaj kłódki w hostelach (nawet w nocy)</span>
          </li>
          <li className="flex items-start gap-2">
            <span>✓</span>
            <span>Nie pij wody z kranu (nawet do mycia zębów!)</span>
          </li>
          <li className="flex items-start gap-2">
            <span>✓</span>
            <span>Ubezpieczenie musi pokrywać sporty wodne</span>
          </li>
          <li className="flex items-start gap-2">
            <span>✓</span>
            <span>Nigdy nie zostaw napoju bez opieki w barze</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
