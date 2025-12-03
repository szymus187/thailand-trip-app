import type { TripData } from '../types';

export const initialTripData: TripData = {
  checklist: [
    { id: '1', text: 'Paszport ważny min. 6 miesięcy od daty powrotu', completed: false, category: 'document' },
    { id: '2', text: 'Ubezpieczenie podróżne (200-250 PLN) - ze sportami wodnymi', completed: false, category: 'document' },
    { id: '3', text: 'Szczepienia: Hepatitis A, tężec (wizyta 4 tygodnie przed)', completed: false, category: 'document' },
    { id: '4', text: 'Lot Bangkok-Chiang Mai (dzień 5)', completed: false, category: 'booking' },
    { id: '5', text: 'Lot Chiang Mai-Krabi (dzień 10)', completed: false, category: 'booking' },
    { id: '6', text: 'Pierwsze 2 noce w Bangkok (Bed Station Hostel)', completed: false, category: 'booking' },
    { id: '7', text: 'Grab', completed: false, category: 'app' },
    { id: '8', text: 'Klook', completed: false, category: 'app' },
    { id: '9', text: 'XE Currency', completed: false, category: 'app' },
    { id: '10', text: 'Maps.me', completed: false, category: 'app' },
    { id: '11', text: 'Google Translate (offline tajski)', completed: false, category: 'app' },
    { id: '12', text: 'Kopia dokumentów w chmurze + wydrukowana', completed: false, category: 'document' },
  ],

  itinerary: [
    {
      day: 1,
      date: 'Czwartek',
      title: 'Przylot do Bangkok',
      location: 'Bangkok',
      budget: 800,
      timeSlots: [
        {
          start: '06:00',
          end: '14:00',
          activity: 'Podróż i przylot',
          description: 'Przylot na Suvarnabhumi Airport (BKK)',
          tips: [
            'SIM karta w hali przylotów: AIS Tourist SIM (299 bahtów/15 dni/15GB)',
            'Bankomat: wypłać 5000 bahtów na start (żółty bankomat bez prowizji)'
          ]
        },
        {
          start: '14:30',
          end: '16:00',
          activity: 'Transfer do hostelu',
          cost: 250,
          description: 'Grab do Bed Station Hostel, Khao San area',
          tips: ['Alternatywa: Airport Rail Link + taxi (60 + 100 bahtów)']
        },
        {
          start: '16:00',
          end: '18:00',
          activity: 'Check-in i aklimatyzacja',
          cost: 350,
          description: 'Check-in w Bed Station Hostel',
        },
        {
          start: '18:00',
          end: '21:00',
          activity: 'Pierwszy wieczór',
          cost: 100,
          location: 'Khao San Road',
          description: 'Spacer po Khao San Road, kolacja Pad Thai na ulicy',
        }
      ]
    },
    {
      day: 2,
      date: 'Piątek',
      title: 'Bangkok: Świątynie i rzeka',
      location: 'Bangkok',
      budget: 1500,
      timeSlots: [
        {
          start: '07:00',
          end: '08:30',
          activity: 'Śniadanie',
          cost: 50,
          description: 'Śniadanie w hostelu lub na ulicy',
        },
        {
          start: '09:00',
          end: '12:30',
          activity: 'Grand Palace i Wat Phra Kaew',
          cost: 500,
          description: 'Zwiedzanie najważniejszego kompleksu pałacowego',
          tips: [
            'Długie spodnie, zakryte ramiona',
            'Audio guide: 200 bahtów extra - warto!',
            'Unikaj ludzi mówiących "palace is closed" - to scam!'
          ]
        },
        {
          start: '14:00',
          end: '16:30',
          activity: 'Wat Pho',
          cost: 200,
          location: '5 minut spacerem od Grand Palace',
          description: 'Leżący Budda - niesamowity!',
          tips: ['15:30 - Darmowy masaż stóp od studentów (napiwek 50 bahtów)']
        },
        {
          start: '16:30',
          end: '18:30',
          activity: 'Wat Arun o zachodzie',
          cost: 105,
          description: 'Ferry z Tha Tien Pier (5 bahtów) + wejście (100 bahtów)',
          tips: ['Wejście na górę na zachód słońca - OBOWIĄZKOWO!']
        },
        {
          start: '19:00',
          end: '22:00',
          activity: 'Wieczorna rzeka',
          cost: 200,
          location: 'Sip Twelve przy rzece',
          description: 'Kolacja i powrót łódką Chao Phraya Express',
        }
      ]
    },
    {
      day: 3,
      date: 'Sobota',
      title: 'Bangkok: Lokalne doświadczenia',
      location: 'Bangkok',
      budget: 2000,
      timeSlots: [
        {
          start: '05:30',
          end: '09:00',
          activity: 'Targ Chatuchak',
          cost: 80,
          description: 'Największy targ w Azji!',
          location: 'BTS Skytrain do Mo Chit',
        },
        {
          start: '09:30',
          end: '13:00',
          activity: 'Kurs gotowania',
          cost: 800,
          description: 'Silom Thai Cooking School - gotujemy 4 dania',
        },
        {
          start: '17:30',
          end: '19:00',
          activity: 'Chinatown',
          cost: 235,
          location: 'Yaowarat Road',
          description: 'Street food safari!',
        },
        {
          start: '19:30',
          end: '21:00',
          activity: 'Masaż tajski',
          cost: 500,
          description: 'Health Land Spa - tradycyjny masaż 1h',
        },
        {
          start: '21:30',
          end: '23:00',
          activity: 'Sky Bar',
          cost: 400,
          location: 'Lebua',
          description: 'Widok jak z "Kac Vegas 2"',
        }
      ]
    },
    {
      day: 4,
      date: 'Niedziela',
      title: 'Bangkok: Kanały i lokalne życie',
      location: 'Bangkok',
      budget: 1200,
      timeSlots: [
        {
          start: '06:00',
          end: '09:00',
          activity: 'Pływający targ',
          cost: 150,
          location: 'Taling Chan Floating Market',
          description: 'Lokalny, nie turystyczny! Śniadanie na łódce: boat noodles',
        },
        {
          start: '09:30',
          end: '12:00',
          activity: 'Ukryte świątynie',
          cost: 50,
          description: 'Wat Saket (Golden Mount) - 344 stopnie, najlepszy widok na Bangkok',
        },
        {
          start: '14:30',
          end: '16:30',
          activity: 'Jim Thompson House',
          cost: 200,
          description: 'Historia amerykańskiego "króla jedwabiu"',
          tips: ['Obowiązkowa wycieczka z przewodnikiem', 'Klimatyzacja - odpoczynek od upału!']
        },
        {
          start: '17:00',
          end: '19:00',
          activity: 'Lumpini Park',
          cost: 0,
          description: 'Darmowy koncert, obserwowanie waranów w stawie',
        },
        {
          start: '19:30',
          end: '21:30',
          activity: 'Train Night Market Ratchada',
          cost: 250,
          description: 'Kolacja seafood + zakupy pamiątek (targuj się!)',
        }
      ]
    },
    {
      day: 5,
      date: 'Poniedziałek',
      title: 'Bangkok → Chiang Mai',
      location: 'Bangkok → Chiang Mai',
      budget: 1300,
      timeSlots: [
        {
          start: '08:00',
          end: '09:00',
          activity: 'Check-out',
          description: 'Śniadanie w hostelu, check-out',
        },
        {
          start: '09:30',
          end: '10:30',
          activity: 'Dojazd na lotnisko',
          cost: 45,
          description: 'Airport Rail Link z Phaya Thai',
          tips: ['Check-in online wcześniej!']
        },
        {
          start: '12:25',
          end: '13:45',
          activity: 'Lot do Chiang Mai',
          cost: 650,
          description: 'Thai AirAsia FD3432',
        },
        {
          start: '14:00',
          end: '15:30',
          activity: 'Transfer i check-in',
          cost: 340,
          description: 'Songthaew z lotniska + check-in w Stamps Backpackers',
        },
        {
          start: '16:00',
          end: '18:00',
          activity: 'Spacer po Old City',
          cost: 30,
          location: 'Tha Phae Gate',
          description: 'Rozpoznanie okolicy, fruit shake',
        }
      ]
    },
    {
      day: 6,
      date: 'Wtorek',
      title: 'Chiang Mai: Słonie i dżungla',
      location: 'Chiang Mai',
      budget: 3000,
      timeSlots: [
        {
          start: '07:30',
          end: '17:00',
          activity: 'Elephant Nature Park (ETYCZNY!)',
          cost: 2500,
          description: 'Karmienie i kąpiel słoni BEZ jazdy!',
          tips: [
            'Pick-up z hostelu',
            'Lunch wegetariański wliczony',
            'To NAJLEPSZA etyczna opcja!'
          ]
        },
        {
          start: '19:00',
          end: '21:00',
          activity: 'Kolacja z widokiem',
          cost: 150,
          location: 'The Riverside',
          description: 'Khao Soi (danie regionalne)',
        },
        {
          start: '21:30',
          end: '23:00',
          activity: 'Nocny masaż',
          cost: 250,
          description: 'Lila Thai Massage (były więźniarki)',
        }
      ]
    },
    {
      day: 7,
      date: 'Środa',
      title: 'Chiang Mai: Doi Inthanon',
      location: 'Chiang Mai',
      budget: 2000,
      timeSlots: [
        {
          start: '06:00',
          end: '18:00',
          activity: 'Najwyższy szczyt Tajlandii',
          cost: 1200,
          description: 'Doi Inthanon small group tour',
          tips: [
            'Wachirathan Waterfall',
            'Twin Pagodas (King & Queen)',
            'Szczyt 2565m',
            'Plantacja kawy + degustacja'
          ]
        },
        {
          start: '18:30',
          end: '20:00',
          activity: 'Night Bazaar',
          cost: 230,
          description: 'Kolacja w food court + zakupy',
        },
        {
          start: '20:30',
          end: '22:30',
          activity: 'Muay Thai',
          cost: 500,
          location: 'Thapae Boxing Stadium',
          description: 'Prawdziwe walki, niesamowita atmosfera!',
        }
      ]
    },
    {
      day: 8,
      date: 'Czwartek',
      title: 'Chiang Mai: Świątynie i kultura',
      location: 'Chiang Mai',
      budget: 800,
      timeSlots: [
        {
          start: '05:30',
          end: '07:30',
          activity: 'Medytacja z mnichami',
          cost: 0,
          location: 'Wat Suan Dok',
          description: 'Poranna medytacja, chanting i rozmowa z mnichami (DARMOWE)',
        },
        {
          start: '09:30',
          end: '12:00',
          activity: 'Doi Suthep',
          cost: 120,
          description: 'Songthaew + wejście (306 schodów!)',
          tips: ['Niesamowity widok na miasto!']
        },
        {
          start: '15:00',
          end: '16:30',
          activity: 'Bua Thong Waterfalls',
          cost: 150,
          description: '"Sticky waterfalls" - można chodzić po wodospadzie!',
          tips: ['Wstęp DARMOWY']
        },
        {
          start: '19:30',
          end: '22:00',
          activity: 'Pożegnalny wieczór',
          cost: 200,
          location: 'North Gate Jazz Club',
          description: 'Kolacja + live music',
        }
      ]
    },
    {
      day: 9,
      date: 'Piątek',
      title: 'Chiang Mai → Krabi',
      location: 'Chiang Mai → Krabi',
      budget: 2000,
      timeSlots: [
        {
          start: '09:00',
          end: '10:00',
          activity: 'Późne śniadanie',
          cost: 150,
          location: 'Rustic & Blue',
          description: 'Najlepsze śniadanie w mieście!',
        },
        {
          start: '10:30',
          end: '12:00',
          activity: 'Ostatnie zakupy',
          cost: 150,
          location: 'Warorot Market',
          description: 'Suszone mango, herbata z północy',
        },
        {
          start: '15:20',
          end: '17:10',
          activity: 'Lot do Krabi',
          cost: 850,
          description: 'Thai VietJet VZ346',
        },
        {
          start: '17:30',
          end: '19:00',
          activity: 'Transfer do Ao Nang',
          cost: 550,
          description: 'Shuttle bus + check-in w Tan Hostel x Cafe',
        },
        {
          start: '19:00',
          end: '23:00',
          activity: 'Pierwszy zachód słońca',
          cost: 400,
          location: 'Ao Nang Beach',
          description: 'Kolacja na plaży, fire show, beach party',
        }
      ]
    },
    {
      day: 10,
      date: 'Sobota',
      title: '4 Islands Tour',
      location: 'Krabi',
      budget: 1500,
      timeSlots: [
        {
          start: '08:00',
          end: '16:00',
          activity: '4 Islands Tour by Speedboat',
          cost: 900,
          description: 'Railay Beach, Phra Nang Cave, Chicken Island (snorkeling), Poda Island, Tup Island',
          tips: [
            'Krem SPF50+',
            'Sprzęt do snorkelingu wliczony',
            'Lunch wliczony'
          ]
        },
        {
          start: '19:00',
          end: '21:00',
          activity: 'Railay Beach nocą',
          cost: 300,
          description: 'Longtail boat + kolacja w Kohinoor Indian',
        },
        {
          start: '21:30',
          end: '23:00',
          activity: 'Railay Viewpoint o zachodzie księżyca',
          cost: 100,
          description: 'Wspinaczka 20 min (latarka!), niesamowity widok',
        }
      ]
    },
    {
      day: 11,
      date: 'Niedziela',
      title: 'Hong Islands + relaks',
      location: 'Krabi',
      budget: 2000,
      timeSlots: [
        {
          start: '08:00',
          end: '15:00',
          activity: 'Hong Islands Tour',
          cost: 1200,
          description: 'Laguna jak z "Plaży", snorkeling, Hong Beach, Lading Island',
          tips: ['Longtail boat, mniejsza grupa', 'Lunch wliczony']
        },
        {
          start: '15:30',
          end: '17:30',
          activity: 'Spa time',
          cost: 350,
          description: 'Thai massage 1.5h + aloe vera na oparzenia',
        },
        {
          start: '18:00',
          end: '20:00',
          activity: 'Sunset ritual',
          cost: 140,
          location: 'Noppharat Thara Beach',
          description: 'Spokojna plaża, picnic, najlepszy zachód słońca!',
        },
        {
          start: '20:30',
          end: '22:30',
          activity: 'Nocny targ',
          cost: 200,
          location: 'Ao Nang Walking Street',
          description: 'Kolacja, muzyka na żywo',
        }
      ]
    },
    {
      day: 12,
      date: 'Poniedziałek',
      title: 'Emerald Pool + Hot Springs',
      location: 'Krabi',
      budget: 1600,
      timeSlots: [
        {
          start: '07:30',
          end: '16:00',
          activity: 'Krabi Jungle Tour',
          cost: 800,
          description: 'Tiger Cave Temple (1260 schodów!), Emerald Pool, Hot Springs Waterfall',
          tips: ['Group tour', 'Lunch wliczony', 'Naturalne jacuzzi w hot springs!']
        },
        {
          start: '17:00',
          end: '18:30',
          activity: 'Chill na plaży',
          cost: 200,
          description: 'Wypożyczenie kajaka na 2h',
        },
        {
          start: '19:00',
          end: '21:00',
          activity: 'Seafood feast',
          cost: 380,
          location: 'Wang Sai Seafood',
          description: 'Cały grillowany snapper + piwo Chang',
        },
        {
          start: '21:30',
          end: '23:30',
          activity: 'Ostatnia noc na południu',
          cost: 150,
          location: 'The Last Fisherman Bar',
          description: 'Drinks, live music, pożegnanie z plażą',
        }
      ]
    },
    {
      day: 13,
      date: 'Wtorek',
      title: 'Krabi → Bangkok',
      location: 'Krabi → Bangkok',
      budget: 2200,
      timeSlots: [
        {
          start: '08:00',
          end: '10:00',
          activity: 'Ostatnie chwile na plaży',
          cost: 100,
          description: 'Wschód słońca, śniadanie w Tan Hostel Cafe',
        },
        {
          start: '13:00',
          end: '14:20',
          activity: 'Lot Krabi-Bangkok',
          cost: 750,
          description: 'Thai AirAsia FD3222',
        },
        {
          start: '15:00',
          end: '17:00',
          activity: 'Powrót do Bangkok',
          cost: 395,
          description: 'Airport Rail Link + check-in w Here Hostel (z basenem!)',
        },
        {
          start: '17:30',
          end: '19:30',
          activity: 'Ostatnie zakupy',
          cost: 500,
          location: 'MBK Center',
          description: 'Pamiątki, ubrania',
        },
        {
          start: '20:00',
          end: '22:00',
          activity: 'Pożegnalna kolacja',
          cost: 300,
          location: 'Chinatown',
          description: 'Wszystko czego nie jadłeś!',
        },
        {
          start: '22:30',
          end: '00:00',
          activity: 'Khao San Road ostatni raz',
          cost: 210,
          description: 'Bucket drink + Chang beer',
        }
      ]
    },
    {
      day: 14,
      date: 'Środa',
      title: 'Powrót do domu',
      location: 'Bangkok',
      budget: 500,
      timeSlots: [
        {
          start: '07:00',
          end: '09:30',
          activity: 'Ostatnie chwile',
          cost: 250,
          description: 'Śniadanie, masaż tajski',
        },
        {
          start: '11:00',
          end: '15:00',
          activity: 'Przejazd na lotnisko',
          cost: 100,
          description: 'Tax refund, ostatnie pamiątki',
          tips: ['Jim Thompson Outlet przy lotnisku', 'Wymiana pozostałych bahtów']
        }
      ]
    }
  ],

  packing: [
    { id: 'p1', name: 'Paszport + kopia', category: 'documents', packed: false },
    { id: 'p2', name: 'Potwierdzenia rezerwacji (wydrukowane)', category: 'documents', packed: false },
    { id: 'p3', name: 'Karta płatnicza + zapasowa', category: 'documents', packed: false },
    { id: 'p4', name: 'Zdjęcia paszportowe 2x', category: 'documents', packed: false },
    { id: 'p5', name: 'T-shirt', category: 'clothes', packed: false, quantity: '3x' },
    { id: 'p6', name: 'Krótkie spodenki', category: 'clothes', packed: false, quantity: '2x' },
    { id: 'p7', name: 'Długie spodnie', category: 'clothes', packed: false, quantity: '1x' },
    { id: 'p8', name: 'Koszula (świątynie)', category: 'clothes', packed: false, quantity: '1x' },
    { id: 'p9', name: 'Strój kąpielowy', category: 'clothes', packed: false, quantity: '2x' },
    { id: 'p10', name: 'Bielizna', category: 'clothes', packed: false, quantity: '7x' },
    { id: 'p11', name: 'Lekka kurtka (klimatyzacja!)', category: 'clothes', packed: false },
    { id: 'p12', name: 'Powerbank 20000mAh', category: 'electronics', packed: false },
    { id: 'p13', name: 'Ładowarki', category: 'electronics', packed: false },
    { id: 'p14', name: 'Kłódka do szafki', category: 'other', packed: false },
    { id: 'p15', name: 'Ręcznik szybkoschnący', category: 'toiletries', packed: false },
    { id: 'p16', name: 'Krem SPF 50+', category: 'toiletries', packed: false },
    { id: 'p17', name: 'Spray na komary (z DEET)', category: 'toiletries', packed: false },
    { id: 'p18', name: 'Podstawowe leki', category: 'toiletries', packed: false },
  ],

  budget: [
    { name: 'Ubezpieczenie', planned: 250, actual: 0 },
    { name: 'Loty krajowe', planned: 2250, actual: 0 },
    { name: 'Noclegi (13 nocy)', planned: 4750, actual: 0 },
    { name: 'SIM karta', planned: 299, actual: 0 },
    { name: 'Jedzenie i picie', planned: 8000, actual: 0 },
    { name: 'Transport lokalny', planned: 2000, actual: 0 },
    { name: 'Atrakcje i wycieczki', planned: 7000, actual: 0 },
    { name: 'Zakupy i pamiątki', planned: 1500, actual: 0 },
    { name: 'Rezerwa', planned: 3000, actual: 0 },
  ],

  emergencyContacts: [
    { name: 'Policja turystyczna', number: '1155', type: 'police' },
    { name: 'Pogotowie', number: '1669', type: 'medical' },
    { name: 'Ambasada Polski w Bangkok', number: '+66 2 205 4200', type: 'embassy' },
  ],

  apps: [
    { name: 'Grab', description: 'Transport - jak Uber w Tajlandii', category: 'transport', link: 'https://www.grab.com' },
    { name: 'Klook', description: 'Tanie bilety na atrakcje', category: 'booking', link: 'https://www.klook.com' },
    { name: 'Maps.me', description: 'Mapy offline', category: 'navigation' },
    { name: 'XE Currency', description: 'Kalkulator walut offline', category: 'utility' },
    { name: 'Google Translate', description: 'Pobierz język tajski offline', category: 'communication' },
    { name: 'LINE', description: 'Komunikator popularny w Tajlandii', category: 'communication' },
  ],

  tips: [
    '"Mai pen rai" - "nie ma problemu" - adoptuj tę filozofię',
    'Nigdy nie dotykaj głowy Tajów (święta część ciała)',
    'Zdejmuj buty wchodząc do świątyń i domów',
    'Targuj się wszędzie oprócz restauracji (zacznij od 50%)',
    'Pij tylko butelkowaną wodę (20 bahtów/1.5L)',
    'Uśmiechaj się - Tajlandia to Land of Smiles',
    'Bądź elastyczny - najlepsze przygody są nieplanowane',
    'Zostaw napiwki - 20-40 bahtów w restauracjach',
    'Respektuj króla - to bardzo ważne!',
    'Ciesz się każdą chwilą - to będzie niesamowita przygoda!',
  ],

  thaiPhrases: [
    // Greetings
    { thai: 'สวัสดี', phonetic: 'Sawadee krap/ka', english: 'Hello / Goodbye', category: 'greetings' },
    { thai: 'ขอบคุณ', phonetic: 'Khob khun krap/ka', english: 'Thank you', category: 'greetings' },
    { thai: 'ไม่เป็นไร', phonetic: 'Mai pen rai', english: 'No problem / It\'s okay / Never mind', category: 'greetings' },
    { thai: 'ขอโทษ', phonetic: 'Kor toht', english: 'Excuse me / Sorry', category: 'greetings' },
    { thai: 'ใช่ / ไม่ใช่', phonetic: 'Chai / Mai chai', english: 'Yes / No', category: 'greetings' },

    // Food
    { thai: 'เท่าไหร่', phonetic: 'Tao rai?', english: 'How much?', category: 'food' },
    { thai: 'อร่อยมาก', phonetic: 'Aroi mak', english: 'Very delicious', category: 'food' },
    { thai: 'ไม่เผ็ด', phonetic: 'Mai phet', english: 'Not spicy', category: 'food' },
    { thai: 'เผ็ดน้อย', phonetic: 'Phet noi', english: 'A little spicy', category: 'food' },
    { thai: 'ผักผลไม้', phonetic: 'Pak phon-la-mai', english: 'Vegetables and fruits', category: 'food' },
    { thai: 'น้ำเปล่า', phonetic: 'Nam plao', english: 'Plain water', category: 'food' },
    { thai: 'เช็คบิล', phonetic: 'Check bin', english: 'Check please / Bill please', category: 'food' },

    // Shopping
    { thai: 'ลดได้ไหม', phonetic: 'Lot dai mai?', english: 'Can you discount?', category: 'shopping' },
    { thai: 'แพงเกินไป', phonetic: 'Phaeng kern pai', english: 'Too expensive', category: 'shopping' },
    { thai: 'ซื้อ', phonetic: 'Sue', english: 'Buy', category: 'shopping' },
    { thai: 'ไม่ซื้อ', phonetic: 'Mai sue', english: 'Not buying', category: 'shopping' },

    // Emergency
    { thai: 'ช่วยด้วย', phonetic: 'Chuay duay!', english: 'Help!', category: 'emergency' },
    { thai: 'โรงพยาบาล', phonetic: 'Rohng phayaban', english: 'Hospital', category: 'emergency' },
    { thai: 'ตำรวจ', phonetic: 'Tamruat', english: 'Police', category: 'emergency' },
    { thai: 'ฉันหายไป', phonetic: 'Chan hai pai', english: 'I\'m lost', category: 'emergency' },

    // Directions
    { thai: 'ที่นี่', phonetic: 'Tee nee', english: 'Here', category: 'directions' },
    { thai: 'ที่นั่น', phonetic: 'Tee nan', english: 'There', category: 'directions' },
    { thai: 'ไปทางไหน', phonetic: 'Pai tahng nai?', english: 'Which way?', category: 'directions' },
    { thai: 'ห้องน้ำ', phonetic: 'Hong nam', english: 'Toilet / Bathroom', category: 'directions' },

    // General
    { thai: 'ผม / ดิฉัน', phonetic: 'Phom (m) / Dichan (f)', english: 'I / Me', category: 'general' },
    { thai: 'คุณ', phonetic: 'Khun', english: 'You', category: 'general' },
    { thai: 'เข้าใจไหม', phonetic: 'Khao jai mai?', english: 'Do you understand?', category: 'general' },
    { thai: 'ไม่เข้าใจ', phonetic: 'Mai khao jai', english: 'I don\'t understand', category: 'general' },
    { thai: 'พูดภาษาอังกฤษได้ไหม', phonetic: 'Poot pasa angrit dai mai?', english: 'Can you speak English?', category: 'general' },
  ],

  culturalRules: [
    {
      title: 'Szacunek dla Monarchy',
      description: 'Monarchia tajska jest głęboko szanowana. Krytykowanie rodziny królewskiej jest nielegalne i może prowadzić do poważnych konsekwencji prawnych.',
      icon: '👑',
      importance: 'critical'
    },
    {
      title: 'Głowa jest święta',
      description: 'Głowa jest uważana za najświętszą część ciała. Nigdy nie dotykaj czyjeś głowy, nawet dzieci. To poważne naruszenie.',
      icon: '👤',
      importance: 'critical'
    },
    {
      title: 'Stopy są najniższe',
      description: 'Stopy to najniższa i najmniej czysta część ciała. Nigdy nie wskazuj stóp na ludzi lub obrazy Buddy. W świątyniach siedź z podkurczonymi nogami.',
      icon: '👣',
      importance: 'critical'
    },
    {
      title: 'Zdejmuj buty',
      description: 'Zawsze zdejmuj buty przed wejściem do świątyń, domów, a często także do sklepów i kawiarni. Szukaj butów przy wejściu jako wskazówki.',
      icon: '👟',
      importance: 'critical'
    },
    {
      title: 'Ubiór w świątyniach',
      description: 'Zakryj ramiona i kolana w świątyniach. Podarta odzież, koszulki bez rękawów i krótkie spodenki mogą skutkować odmową wstępu.',
      icon: '👔',
      importance: 'critical'
    },
    {
      title: 'Nie dotykaj posągów Buddy',
      description: 'Nigdy nie dotykaj, nie wspinaj się ani nie siedź na posągach Buddy. Nie rób selfie z posągami w nieodpowiedni sposób.',
      icon: '🙏',
      importance: 'critical'
    },
    {
      title: 'Gest Wai',
      description: 'Wai to tradycyjne powitanie (złożone dłonie). Jeśli ktoś wykonuje Wai, odpowiedz tym samym gestem z szacunkiem.',
      icon: '🙏',
      importance: 'important'
    },
    {
      title: 'Zachowaj spokój',
      description: 'W Krainie Uśmiechów ludzie rzadko podnoszą głos lub okazują złość publicznie. Publiczna awantura sprawi, że będziesz wyglądać źle.',
      icon: '😊',
      importance: 'important'
    },
    {
      title: 'Skromność w uczuciach',
      description: 'Kultura tajska jest skromna jeśli chodzi o publiczne okazywanie uczuć. Nadmierne PDA sprawia, że ludzie czują się nieswojo.',
      icon: '💑',
      importance: 'important'
    },
    {
      title: 'Używaj "krap/ka"',
      description: 'Dodawanie "krap" (mężczyźni) lub "ka" (kobiety) na końcu zdań to uprzejmy marker pokazujący szacunek.',
      icon: '💬',
      importance: 'good-to-know'
    },
  ],

  foodSafety: [
    // SAFE
    {
      title: 'Wybieraj zatłoczone stragany',
      description: 'Najważniejsza zasada! Tłum oznacza świeże jedzenie i dobrą jakość. Tajowie wiedzą, które straganiki są bezpieczne.',
      type: 'safe'
    },
    {
      title: 'Jedzenie gotowane na życzenie',
      description: 'Jedz dania smażone na patelni wok przed Tobą, szaszłyki grillowane na oczach, zupy z wrzących kotłów - gorące = bezpieczne!',
      type: 'safe'
    },
    {
      title: 'Owoce do obrania',
      description: 'Owoce, które można obrać (banan, mango, papaja) są bezpieczne. Obieraj je samodzielnie.',
      type: 'safe'
    },
    {
      title: 'Pad Thai, Som Tam, Satay',
      description: 'Te popularne dania są zwykle gotowane na świeżo i bezpieczne do spożycia.',
      type: 'safe'
    },

    // CAUTION
    {
      title: 'Lód w napojach',
      description: 'Lód w większości miejsc jest bezpieczny (robiony z filtrowanej wody), ale jeśli masz wątpliwości, zamów bez lodu.',
      type: 'caution'
    },
    {
      title: 'Surowe warzywa w sałatkach',
      description: 'Som Tam może zawierać warzywa myte wodą z kranu. Jeśli masz wrażliwy żołądek, lepiej unikać przez pierwsze dni.',
      type: 'caution'
    },
    {
      title: 'Jedzenie stojące na zewnątrz',
      description: 'Omijaj miski gotowych potraw stojących odkryte w temperaturze pokojowej, chyba że widzisz że dopiero je wystawiono.',
      type: 'caution'
    },

    // AVOID
    {
      title: 'Woda z kranu',
      description: 'NIE PIJ wody z kranu! Kupuj butelkowaną wodę (6-20 bahtów). Używaj butelkowanej wody nawet do mycia zębów.',
      type: 'avoid'
    },
    {
      title: 'Surowe mięso/ryby (Koi Pla)',
      description: 'Koi pla to danie z surowej ryby popularne na północnym wschodzie. Wysokie ryzyko pasożytów! UNIKAJ surowego mięsa.',
      type: 'avoid'
    },
    {
      title: 'Potrawy z majonezem',
      description: 'Majonez szybko się psuje w upale. Unikaj potraw z majonezem na straganach ulicznych.',
      type: 'avoid'
    },
    {
      title: 'Niepopularne straganiki',
      description: 'Jeśli stragan jest pusty i jedzenie wygląda jakby stało tam od godzin - omijaj!',
      type: 'avoid'
    },
  ],

  scams: [
    {
      name: 'Palace is Closed (Grand Palace)',
      description: 'Ludzie przed Grand Palace mówią że pałac jest zamknięty i proponują alternatywną "wycieczkę" tuk-tukiem.',
      howToAvoid: 'Ignoruj! Pałac jest otwarty codziennie 8:30-15:30. Sprawdź godziny otwarcia online przed wizytą.'
    },
    {
      name: 'Tuk-tuk za 20 bahtów',
      description: 'Kierowcy oferują bardzo tanie przejazdy, ale zawiozą Cię do sklepów jubilerskich gdzie dostaną prowizję.',
      howToAvoid: 'Ustal cenę przed wejściem. Używaj Grab/Bolt dla uczciwych cen. Normalna cena tuk-tuka: 100-200 bahtów.'
    },
    {
      name: 'Fałszywe Taxi (bez licznika)',
      description: 'Taksówkarze odmawią włączenia licznika i zaproponują "fixed price" - zawsze zbyt wysoki.',
      howToAvoid: 'Nalegaj na licznik ("meter please"). Jeśli odmówią, weź inną taksówkę. Lub używaj Grab.'
    },
    {
      name: 'Jet Ski Scam',
      description: 'Wynajmujący twierdzi że uszkodziłeś jet ski i żąda ogromnej kwoty za "naprawę".',
      howToAvoid: 'Zrób zdjęcia/video jet ski przed i po. Lepiej unikaj wynajmu jet ski w popularnych miejscach turystycznych.'
    },
    {
      name: 'Fałszywe sklepy jubilerskie',
      description: 'Tuk-tuk lub "przyjazny lokalny" zabiera Cię do "specjalnego sklepu" ze złotymi okazjami.',
      howToAvoid: 'Nigdy nie kupuj biżuterii w miejscach poleconych przez kierowców/nieznajomych. To prawie zawsze oszustwo.'
    },
    {
      name: 'Bar/Club Bill Scam',
      description: 'Niektóre bary w turystycznych dzielnicach zawyżają rachunek lub dodają ukryte opłaty.',
      howToAvoid: 'Sprawdź ceny przed zamówieniem. Zachowaj paragon. W razie problemu zagrożenie wezwaniem policji turystycznej (1155) często pomaga.'
    },
  ],

  travelHacks: [
    {
      title: 'Wypłacaj z żółtych bankomatów',
      description: 'Bankomaty Krungsri Bank (żółte) nie pobierają opłaty za wypłaty zagranicznych kart! Inne banki: 220 bahtów opłaty.',
      category: 'money'
    },
    {
      title: 'Zawsze pytaj o cenę przed',
      description: 'Czy to tuk-tuk, masaż czy jedzenie - zawsze ustalaj cenę PRZED skorzystaniem z usługi. Zapisz ją w telefonie jeśli trzeba.',
      category: 'money'
    },
    {
      title: 'Targuj się od 50% ceny',
      description: 'Na rynkach zacznij od 50% podanej ceny. Finalna cena zwykle to 60-70% oryginalnej. W sklepach z cenami nie targuj się.',
      category: 'money'
    },
    {
      title: '7-Eleven to Twój przyjaciel',
      description: 'Co 100m znajdziesz 7-Eleven. Tam: tania woda, przekąski, toalety, bankomat, opłacenie rachunków. Używaj ich!',
      category: 'general'
    },
    {
      title: 'Grab > Taxi',
      description: 'Grab (azjatycki Uber) jest tańszy, bezpieczniejszy i bez targowania. Kierowca zna trasę z GPS. Must-have app!',
      category: 'transport'
    },
    {
      title: 'Noc w pociągu = oszczędność',
      description: 'Nocny pociąg Bangkok-Chiang Mai kosztuje ~600-1000 bahtów, oszczędzasz nocleg + doświadczenie! Zarezerwuj online wcześniej.',
      category: 'transport'
    },
    {
      title: 'Rezerwuj online = taniej',
      description: 'Klook, GetYourGuide, 12Go.asia często mają niższe ceny niż kupowanie na miejscu. Rezerwuj dzień wcześniej.',
      category: 'money'
    },
    {
      title: 'Unikaj weekendów w hotspotach',
      description: 'Chatuchak Market (sobota), pełne wyspy w weekend = droższe. Jeśli możesz, odwiedzaj popularne miejsca w tygodniu.',
      category: 'general'
    },
    {
      title: 'Zjedz śniadanie jak lokalsi',
      description: 'Śniadanie w hostelu vs uliczny jok (zupa ryżowa): 150 baht vs 30 bahtów. Jedz gdzie Tajowie - taniej i autentyczniej!',
      category: 'money'
    },
    {
      title: 'Nocne pociągi i autobusy VIP',
      description: 'Oszczędzaj nocleg wybierając nocne przejazdy VIP busem (klimatyzacja, wygodne siedzenia, WiFi). Bangkok-Chiang Mai: ~500-800 bahtów.',
      category: 'accommodation'
    },
    {
      title: 'Kup kartę SIM na lotnisku',
      description: 'AIS/True/DTAC Tourist SIM ~299 bahtów (15 dni, 15GB+). Nie czekaj - kup od razu na lotnisku, zaoszczędzisz czas.',
      category: 'general'
    },
    {
      title: 'Darmowe WiFi wszędzie',
      description: 'Hostele, kawiarnie, restauracje, centra handlowe = darmowe WiFi. Oszczędzaj dane mobilne, łącz się z WiFi.',
      category: 'general'
    },
  ],
};
