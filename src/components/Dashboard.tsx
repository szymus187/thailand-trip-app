import { useState } from 'react';
import { useTripData } from '../hooks/useTripData';

export default function Dashboard() {
  const { tripData, getTotalBudget, getCompletionStats } = useTripData();
  const budget = getTotalBudget();
  const stats = getCompletionStats();
  const [bahts, setBahts] = useState('100');

  const quickPhrases = [
    { thai: 'เท่าไหร่', phonetic: 'Tao rai?', english: 'Ile kosztuje?' },
    { thai: 'ลดได้ไหม', phonetic: 'Lot dai mai?', english: 'Możesz zniżkę?' },
    { thai: 'ไม่เผ็ด', phonetic: 'Mai phet', english: 'Nie ostre' },
    { thai: 'อร่อยมาก', phonetic: 'Aroi mak', english: 'Pyszne!' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-thai-blue to-thai-red text-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Witaj w Twojej Przygodzie! 🎉</h2>
        <p className="text-blue-100">
          14 dni niesamowitych przygód w Tajlandii czeka na Ciebie.
          Ta aplikacja pomoże Ci się przygotować i śledzić postępy.
        </p>
      </div>

      {/* Quick Access Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.location.hash = 'today'; }}
          className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="text-3xl mb-2">📍</div>
          <div className="font-semibold">Dzisiaj</div>
          <div className="text-xs text-blue-100">Co robię dzisiaj?</div>
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.location.hash = 'survival'; }}
          className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="text-3xl mb-2">🆘</div>
          <div className="font-semibold">SOS</div>
          <div className="text-xs text-red-100">Survival Kit</div>
        </a>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Checklist Progress */}
        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-700">Przed wyjazdem</h3>
            <span className="text-2xl">✅</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Postęp</span>
              <span className="font-semibold">
                {stats.checklist.completed}/{stats.checklist.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{
                  width: `${(stats.checklist.completed / stats.checklist.total) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Packing Progress */}
        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-700">Pakowanie</h3>
            <span className="text-2xl">🎒</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Postęp</span>
              <span className="font-semibold">
                {stats.packing.packed}/{stats.packing.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{
                  width: `${(stats.packing.packed / stats.packing.total) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Budget Overview */}
        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-700">Budżet</h3>
            <span className="text-2xl">💰</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Planowany</span>
              <span className="font-semibold">{budget.planned.toLocaleString()} ฿</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Wydano</span>
              <span className="font-semibold text-thai-red">{budget.actual.toLocaleString()} ฿</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Phrases Widget */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-5">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">💬</span>
          Quick Phrases (tap to copy)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {quickPhrases.map((phrase, idx) => (
            <button
              key={idx}
              onClick={() => {
                navigator.clipboard.writeText(phrase.phonetic);
                alert('✓ Skopiowano: ' + phrase.phonetic);
              }}
              className="bg-white rounded-lg p-3 text-left hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-thai text-gray-800">{phrase.thai}</div>
              <div className="text-xs font-semibold text-purple-600">
                {phrase.phonetic}
              </div>
              <div className="text-xs text-gray-600">{phrase.english}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Currency Converter Widget */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">💱</span>
          Szybki kalkulator (1 PLN ≈ 8.3 THB)
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Bahty (฿)</label>
            <input
              type="number"
              value={bahts}
              onChange={(e) => setBahts(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thai-blue"
              placeholder="100"
            />
            <div className="mt-2 text-2xl font-bold text-thai-blue">
              {bahts} ฿
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Złote (PLN)</label>
            <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
              {(parseFloat(bahts || '0') / 8.3).toFixed(2)}
            </div>
            <div className="mt-2 text-2xl font-bold text-green-600">
              ~{Math.round(parseFloat(bahts || '0') / 8.3)} PLN
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[100, 500, 1000].map((amount) => (
            <button
              key={amount}
              onClick={() => setBahts(amount.toString())}
              className="px-3 py-2 bg-gray-100 hover:bg-thai-blue hover:text-white rounded-lg text-sm transition-colors"
            >
              {amount}฿
            </button>
          ))}
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Emergency Contacts */}
        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
            <span className="text-xl mr-2">🚨</span>
            Ważne kontakty
          </h3>
          <div className="space-y-2">
            {tripData.emergencyContacts.map((contact, idx) => (
              <div key={idx} className="flex justify-between text-sm">
                <span className="text-gray-600">{contact.name}</span>
                <a
                  href={`tel:${contact.number}`}
                  className="font-mono text-thai-blue hover:underline"
                >
                  {contact.number}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
            <span className="text-xl mr-2">💡</span>
            Złote zasady
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>🙏 "Mai pen rai" - nie ma problemu</li>
            <li>👟 Zdejmuj buty w świątyniach</li>
            <li>💵 Targuj się (zacznij od 50%)</li>
            <li>😊 Uśmiechaj się - Land of Smiles!</li>
          </ul>
        </div>
      </div>

      {/* Trip Overview */}
      <div className="bg-white rounded-lg p-5 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-xl mr-2">🗺️</span>
          Plan wycieczki
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-thai-blue">14</div>
            <div className="text-sm text-gray-600">dni przygód</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-thai-red">3</div>
            <div className="text-sm text-gray-600">miasta</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-thai-gold">∞</div>
            <div className="text-sm text-gray-600">wspomnień</div>
          </div>
        </div>
      </div>
    </div>
  );
}
