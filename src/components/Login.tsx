import { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hasło: tajlandia2025
    if (password === 'tajlandia2025') {
      onLogin();
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-thai-blue via-thai-red to-thai-gold bg-clip-text text-transparent mb-2">
            🇹🇭 Wycieczka do Tajlandii
          </h1>
          <p className="text-gray-600">Wpisz hasło, aby kontynuować</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Hasło
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thai-blue focus:border-transparent outline-none transition"
              placeholder="Wpisz hasło..."
              autoFocus
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              Nieprawidłowe hasło. Spróbuj ponownie.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-thai-blue hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Zaloguj się
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>🌴 Sawadee krap!</p>
        </div>
      </div>
    </div>
  );
}
