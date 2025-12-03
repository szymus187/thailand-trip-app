# 🇹🇭 Wycieczka do Tajlandii 2025 - Trip Manager App

Interaktywna aplikacja webowa do zarządzania 14-dniową wycieczką backpackingową do Tajlandii.

## ✨ Funkcje

- ✅ **Checklist przed wyjazdem** - śledź przygotowania (dokumenty, rezerwacje, aplikacje)
- 📅 **Szczegółowy plan dnia po dniu** - 14 dni z harmonogramem, kosztami i wskazówkami
- 💰 **Tracker budżetu** - zarządzaj wydatkami w kategoriach, śledź postępy
- 🎒 **Lista pakowania** - minimalistyczna lista z podziałem na kategorie
- ℹ️ **Ważne informacje** - numery alarmowe, aplikacje, złote zasady, przydatne zwroty
- 💾 **Offline support** - wszystkie dane zapisywane lokalnie w przeglądarce
- 📱 **Responsive design** - działa na telefonie, tablecie i komputerze
- 🎨 **Piękny design** - w kolorach tajskiej flagi (niebieski, czerwony, złoty)

## 🚀 Jak uruchomić

### Instalacja

```bash
npm install
```

### Uruchomienie (development)

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173`

### Build (production)

```bash
npm run build
```

Zbudowana aplikacja znajdzie się w folderze `dist/`

### Podgląd buildu

```bash
npm run preview
```

## 📱 Progressive Web App (PWA)

Aplikacja jest gotowa do zainstalowania jako PWA:
- Działa offline (dane zapisywane lokalnie)
- Można dodać do ekranu głównego telefonu
- Szybkie ładowanie
- Responsywny design

## 🛠️ Technologie

- **React 18** - biblioteka UI
- **TypeScript** - typowanie
- **Tailwind CSS** - styling
- **Vite** - bundler
- **LocalStorage** - persystencja danych

## 📂 Struktura projektu

```
src/
├── components/       # Komponenty React
│   ├── Dashboard.tsx
│   ├── Checklist.tsx
│   ├── Itinerary.tsx
│   ├── Budget.tsx
│   ├── Packing.tsx
│   └── Info.tsx
├── data/
│   └── tripData.ts   # Dane wycieczki
├── hooks/
│   └── useTripData.tsx  # Context i hooks
├── types/
│   └── index.ts      # Typy TypeScript
├── App.tsx           # Główny komponent
└── main.tsx          # Entry point
```

## 💡 Jak używać

### 1. Przed wyjazdem
- Przejdź do zakładki **"Przed wyjazdem"**
- Odznaczaj zadania w miarę ich realizacji
- Sprawdzaj postępy na Dashboard

### 2. Pakowanie
- Zakładka **"Pakowanie"**
- Lista podzielona na kategorie
- Zaznaczaj spakowane przedmioty

### 3. Plan dnia
- Zakładka **"Plan dnia"**
- Rozwiń dowolny dzień aby zobaczyć szczegóły
- Sprawdzaj harmonogram, koszty i wskazówki

### 4. Budżet
- Zakładka **"Budżet"**
- Kliknij "Dodaj wydatek" przy kategorii
- Wpisz rzeczywistą kwotę wydaną
- Śledź postępy i pozostały budżet

### 5. Informacje
- Zakładka **"Info"**
- Numery alarmowe
- Przydatne aplikacje
- Złote zasady
- Podstawowe zwroty po tajsku

## 🔄 Reset danych

Dane są zapisywane w localStorage przeglądarki. Aby zresetować:
1. Otwórz DevTools (F12)
2. Application → Local Storage
3. Usuń klucz `thailand-trip-data`

Lub wyczyść dane przeglądarki dla tej strony.

## 🎨 Personalizacja

Możesz łatwo dostosować aplikację:

### Zmiana danych wycieczki
Edytuj `src/data/tripData.ts` - możesz zmienić:
- Dni wycieczki
- Harmonogram
- Budżet
- Listę pakowania
- Wskazówki

### Zmiana kolorów
Edytuj `tailwind.config.js`:
```js
colors: {
  thai: {
    gold: '#FFD700',
    red: '#DA291C',
    blue: '#2E3192',
  }
}
```

### Dodanie własnych kategorii
Rozszerz typy w `src/types/index.ts`

## 📸 Screenshots

Aplikacja zawiera:
- Dashboard z podsumowaniem postępów
- Interaktywną checklistę
- Rozwijany plan dnia po dniu
- Tracker budżetu z edycją wydatków
- Listę pakowania z kategoriami
- Przydatne informacje i numery alarmowe

## 🌐 Deploy

Możesz zadeploy aplikację na:
- **Vercel**: `npm run build` + deploy folder `dist/`
- **Netlify**: podobnie
- **GitHub Pages**: użyj GitHub Actions

## 📝 Licencja

Projekt stworzony dla osobistego użytku. Możesz swobodnie modyfikować i używać.

## 🙏 Sawadee krap!

Miłej podróży do Tajlandii! 🌴✈️🇹🇭

---

**Made with ❤️ for an amazing Thailand adventure**
