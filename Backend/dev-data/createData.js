const { faker } = require('@faker-js/faker');
const fs = require('fs');

const numberOfHotels = 1000,
  numberOfUsers = 10000,
  numberOfHoteliers = 1000,
  numberOfAdmins = 10;

let hotels = [],
  rooms = [],
  users = [],
  reviews = [],
  hoteliers = [];

function toCamelCase(str) {
  return str
    .split(' ') // Split the string by spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words back together
}

const amenities = [
  'swimming pool',
  'tea maker',
  'prayer room',
  'ask inside room',
  'free wifi',
  'gym',
  'pet',
  'game',
  'shopping',
  'parking',
  'elevator',
  'breakfast',
  'restaurant',
  '24 hours services',
  'fire extinguishing',
  'wall closet',
  'help box',
  'party services',
  'taxi',
  'ATM',
  'library',
];

const cityWithCordinates = [
  { city: 'Paris', country: 'France', lat: 48.8588897, lng: 2.320041 },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    lat: 25.0742823,
    lng: 55.1885387,
  },
  {
    city: 'Madrid',
    country: 'Spain',
    lat: 40.4167047,
    lng: -3.7035825,
  },
  { city: 'Tokyo', country: 'Japan', lat: 35.6821936, lng: 139.762221 },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    lat: 52.3730796,
    lng: 4.8924534,
  },
  {
    city: 'Berlin',
    country: 'Germany',
    lat: 52.510885,
    lng: 13.3989367,
  },
  {
    city: 'New York City',
    country: 'United States',
    lat: 40.7127281,
    lng: -74.0060152,
  },
  {
    city: 'Barcelona',
    country: 'Spain',
    lat: 41.3828939,
    lng: 2.1774322,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    lat: 51.4893335,
    lng: -0.1440551,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    lat: 51.4893335,
    lng: -0.1440551,
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    lat: 1.2899175,
    lng: 103.8519072,
  },
  {
    city: 'Munich',
    country: 'Germany',
    lat: 48.1371079,
    lng: 11.5753822,
  },
  { city: 'Milan', country: 'Italy', lat: 45.4641943, lng: 9.1896346 },
  {
    city: 'Seoul',
    country: 'South Korea',
    lat: 37.5666791,
    lng: 126.9782914,
  },
  {
    city: 'Dublin',
    country: 'Ireland',
    lat: 53.3493795,
    lng: -6.2605593,
  },
  {
    city: 'Osaka',
    country: 'Japan',
    lat: 34.6937569,
    lng: 135.5014539,
  },
  {
    city: 'Hong Kong',
    country: 'Japan',
    lat: 35.7116296,
    lng: 139.5669013,
  },
  {
    city: 'Vienna',
    country: 'Austria',
    lat: 48.2083537,
    lng: 16.3725042,
  },
  {
    city: 'Los Angeles',
    country: 'United States',
    lat: 34.0536909,
    lng: -118.242766,
  },
  {
    city: 'Lisbon',
    country: 'Portugal',
    lat: 38.7077507,
    lng: -9.1365919,
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    lat: 50.0596288,
    lng: 14.4464593,
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    lat: 50.0596288,
    lng: 14.4464593,
  },
  {
    city: 'Sydney',
    country: 'Australia',
    lat: -33.8698439,
    lng: 151.2082848,
  },
  {
    city: 'Istanbul',
    country: 'Turkey',
    lat: 41.0766019,
    lng: 29.052495,
  },
  {
    city: 'Melbourne',
    country: 'Australia',
    lat: -37.8142454,
    lng: 144.9631732,
  },
  {
    city: 'Orlando',
    country: 'Florida',
    lat: 28.5421109,
    lng: -81.3790304,
  },
  { city: 'Kyoto', country: 'Japan', lat: 35.021041, lng: 135.7556075 },
  {
    city: 'Frankfurt',
    country: 'Germany',
    lat: 50.1106444,
    lng: 8.6820917,
  },
  {
    city: 'Taipei',
    country: 'Taiwan',
    lat: 25.0375198,
    lng: 121.5636796,
  },
  {
    city: 'Florence',
    country: 'Italy',
    lat: 43.7697955,
    lng: 11.2556404,
  },
  {
    city: 'Toronto',
    country: 'Canada',
    lat: 43.6534817,
    lng: -79.3839347,
  },
  {
    city: 'Athens',
    country: 'Greece',
    lat: 37.9755648,
    lng: 23.7348324,
  },
  {
    city: 'Zurich',
    country: 'Switzerland',
    lat: 47.3744489,
    lng: 8.5410422,
  },
  {
    city: 'Bangkok',
    country: 'Thailand',
    lat: 13.7524938,
    lng: 100.4935089,
  },
  {
    city: 'Las Vegas',
    country: 'United States',
    lat: 36.1672559,
    lng: -115.148516,
  },
  {
    city: 'Miami',
    country: 'United States',
    lat: 25.7741728,
    lng: -80.19362,
  },
  {
    city: 'San Francisco',
    country: 'United States',
    lat: 37.7792588,
    lng: -122.4193286,
  },
  {
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    lat: 3.1516964,
    lng: 101.6942371,
  },
  {
    city: 'Venice',
    country: 'Italy',
    lat: 45.4371908,
    lng: 12.3345898,
  },
  {
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    lat: 24.4538352,
    lng: 54.3774014,
  },
  {
    city: 'Stockholm',
    country: 'Sweden',
    lat: 59.3251172,
    lng: 18.0710935,
  },
  {
    city: 'Brussels',
    country: 'Belgium',
    lat: 50.8465573,
    lng: 4.351697,
  },
  {
    city: 'Tel Aviv',
    country: 'Israel',
    lat: 32.0852997,
    lng: 34.7818064,
  },
  {
    city: 'Shanghai',
    country: 'China',
    lat: 31.2323437,
    lng: 121.4691024,
  },
  {
    city: 'Warsaw',
    country: 'Poland',
    lat: 52.2319581,
    lng: 21.0067249,
  },
  {
    city: 'Guangzhou',
    country: 'China',
    lat: 23.1301964,
    lng: 113.2592945,
  },
  {
    city: 'Beijing',
    country: 'China',
    lat: 39.9057136,
    lng: 116.3912972,
  },
  {
    city: 'Copenhagen',
    country: 'Denmark',
    lat: 55.6867243,
    lng: 12.5700724,
  },
  { city: 'Nice', country: 'France', lat: 43.7009358, lng: 7.2683912 },
  {
    city: 'Washington',
    country: 'United States',
    lat: 38.8950368,
    lng: -77.0365427,
  },
  {
    city: 'Budapest',
    country: 'Hungary',
    lat: 47.4813896,
    lng: 19.1460941,
  },
  {
    city: 'Shenzhen',
    country: 'China',
    lat: 22.5445741,
    lng: 114.0545429,
  },
  {
    city: 'Shenzhen',
    country: 'China',
    lat: 22.5445741,
    lng: 114.0545429,
  },
  {
    city: 'Vancouver',
    country: 'Canada',
    lat: 49.2608724,
    lng: -123.113952,
  },
  {
    city: 'Palma de Mallorca',
    country: 'Spain',
    lat: 39.5695818,
    lng: 2.6500745,
  },
  {
    city: 'Seville',
    country: 'Spain',
    lat: 37.3886303,
    lng: -5.9953403,
  },
  {
    city: 'São Paulo',
    country: 'Brazil',
    lat: -23.5506507,
    lng: -46.6333824,
  },
  {
    city: 'Valencia',
    country: 'Spain',
    lat: 39.4697065,
    lng: -0.3763353,
  },
  {
    city: 'Mexico City',
    country: 'Mexico',
    lat: 19.4326296,
    lng: -99.1331785,
  },
  {
    city: 'Playa Del Carmen',
    country: 'Mexico',
    lat: 20.6308643,
    lng: -87.0779503,
  },
  {
    city: 'Antalya',
    country: 'Turkey',
    lat: 36.8864752,
    lng: 30.7029585,
  },
  {
    city: 'Sapporo',
    country: 'Japan',
    lat: 43.061936,
    lng: 141.3542924,
  },
  {
    city: 'Fukuoka',
    country: 'Japan',
    lat: 33.6251241,
    lng: 130.6180016,
  },
  {
    city: 'Busan',
    country: 'South Korea',
    lat: 35.1799528,
    lng: 129.0752365,
  },
  {
    city: 'Edinburgh',
    country: 'United Kingdom',
    lat: 55.9533456,
    lng: -3.1883749,
  },
  {
    city: 'Porto',
    country: 'Portugal',
    lat: 41.1494512,
    lng: -8.6107884,
  },
  {
    city: 'Jerusalem',
    country: 'Israel',
    lat: 31.7788242,
    lng: 35.2257626,
  },
  {
    city: 'Kraków',
    country: 'Poland',
    lat: 50.0619474,
    lng: 19.9368564,
  },
  {
    city: 'Rio de Janeiro',
    country: 'Brazil',
    lat: -22.9110137,
    lng: -43.2093727,
  },
  {
    city: 'Honolulu',
    country: 'Hawaii',
    lat: 21.304547,
    lng: -157.855676,
  },
  {
    city: 'Montreal',
    country: 'Canada',
    lat: 45.5031824,
    lng: -73.5698065,
  },
  { city: 'Doha', country: 'Qatar', lat: 25.2856329, lng: 51.5264162 },
  {
    city: 'Sharjah',
    country: 'United Arab Emirates',
    lat: 25.3461498,
    lng: 55.4210633,
  },
  {
    city: 'Rhodes',
    country: 'Greece',
    lat: 36.1725297,
    lng: 27.9194016,
  },
  {
    city: 'Verona',
    country: 'Italy',
    lat: 45.4424977,
    lng: 10.9857377,
  },
  {
    city: 'Bologna',
    country: 'Italy',
    lat: 44.4938203,
    lng: 11.3426327,
  },
  {
    city: 'Thessaloniki',
    country: 'Greece',
    lat: 40.6403167,
    lng: 22.9352716,
  },
  {
    city: 'Heraklion',
    country: 'Greece',
    lat: 35.33908,
    lng: 25.1332843,
  },
  {
    city: 'Buenos Aires',
    country: 'Argentina',
    lat: -34.6073387,
    lng: -58.4432852,
  },
  { city: 'Lima', country: 'Peru', lat: -12.0621065, lng: -77.0365256 },
  {
    city: 'Phuket',
    country: 'Thailand',
    lat: 7.9366015,
    lng: 98.3529292,
  },
  {
    city: 'Pattaya-Chonburi',
    country: 'Thailand',
    lat: 13.3239929,
    lng: 100.9904747,
  },
  { city: 'Delhi', country: 'India', lat: 28.6273928, lng: 77.1716954 },
  {
    city: 'Tallinn',
    country: 'Estonia',
    lat: 59.4372155,
    lng: 24.7453688,
  },
  {
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    lat: 10.7763897,
    lng: 106.7011391,
  },
  {
    city: 'Johor Bahru',
    country: 'Malaysia',
    lat: 1.503555,
    lng: 103.7495586,
  },
  {
    city: 'Johor Bahru',
    country: 'Malaysia',
    lat: 1.503555,
    lng: 103.7495586,
  },
  {
    city: 'Santiago',
    country: 'Chile',
    lat: -33.4377756,
    lng: -70.6504502,
  },
  {
    city: 'Tbilisi',
    country: 'Georgia',
    lat: 41.6934591,
    lng: 44.8014495,
  },
  {
    city: 'Riyadh',
    country: 'Saudi Arabia',
    lat: 24.638916,
    lng: 46.7160104,
  },
  {
    city: 'Marrakech',
    country: 'Morocco',
    lat: 31.6258257,
    lng: -7.9891608,
  },
  {
    city: 'Vilnius',
    country: 'Lithuania',
    lat: 54.6870458,
    lng: 25.2829111,
  },
  {
    city: 'Mugla',
    country: 'Turkey',
    lat: 37.1642053,
    lng: 28.2624288,
  },
  {
    city: 'Zhuhai',
    country: 'China',
    lat: 22.273734,
    lng: 113.5721327,
  },
  {
    city: 'Mecca',
    country: 'Saudi Arabia',
    lat: 21.420847,
    lng: 39.826869,
  },
  {
    city: 'Punta Cana',
    country: 'Dominican Republic',
    lat: 18.556551,
    lng: -68.3691611,
  },
  {
    city: 'Guilin',
    country: 'China',
    lat: 25.2779894,
    lng: 110.2910622,
  },
  {
    city: 'Hanoi',
    country: 'Vietnam',
    lat: 21.0283334,
    lng: 105.854041,
  },
  { city: 'Cairo', country: 'Egypt', lat: 30.0443879, lng: 31.2357257 },
  { city: 'Muscat', country: 'Oman', lat: 23.5882019, lng: 58.3829448 },
];

function generateRandomIds(count) {
  const ids = [];
  for (let i = 0; i < count; i++) ids.push(faker.database.mongodbObjectId());

  return ids;
}

function generateRandomRooms(hotelId) {
  const roomsId = [];
  const randomNumber = Math.floor(Math.random() * 10) + 3;
  for (let i = 0; i < randomNumber; i++) {
    const roomId = generateRandomIds(1)[0];
    roomsId.push(roomId);
    const room = {
      _id: roomId,
      roomNumber: faker.number.int({ min: 100, max: 999 }),
      capacity: faker.number.int({ min: 1, max: 5 }),
      hotel: hotelId,
      price: faker.number.int({ min: 50, max: 500 }),
      priceDiscount: faker.number.int({ min: 0, max: 50 }),
      maxGuest: faker.number.int({ min: 50, max: 500 }),
      photos: Array.from({ length: 10 }, () => {
        return faker.image.urlLoremFlickr({
          category: 'rooms',
          width: 480,
          height: 360,
        });
      }),
    };
    rooms.push(room);
  }

  return roomsId;
}

function generateHotelData(hotelOwner) {
  const hotelId = generateRandomIds(1)[0];
  const roomIds = generateRandomRooms(hotelId);
  const country =
    cityWithCordinates[numberOfHotels % cityWithCordinates.length].country;
  const city =
    cityWithCordinates[numberOfHotels % cityWithCordinates.length].city;
  const hotelName =
    toCamelCase(`${faker.word.adjective()} ${faker.word.noun()}`) +
    new Date().getTime();
  const hotelCountry = faker.location.country().toLowerCase();

  const hotel = {
    _id: hotelId,
    name: hotelName,
    owner: hotelOwner,
    rooms: roomIds,
    stars: faker.number.int({ min: 1, max: 5 }),
    city: city,
    description: faker.lorem.paragraph(),
    address: `${country}, ${faker.location.state()} state, ${city}, ${faker.location.street()} street, building number ${faker.location.buildingNumber()}`,
    location: {
      lat: cityWithCordinates[numberOfHotels % cityWithCordinates.length].lat,
      lng: cityWithCordinates[numberOfHotels % cityWithCordinates.length].lng,
    },
    phone: faker.phone.number(
      `+${Math.floor(Math.random() * 100)}-###-###-####`,
    ),
    cover: faker.image.urlLoremFlickr({
      category: 'biuldings',
      width: 480,
      height: 360,
    }),
    photos: faker.helpers.arrayElements(
      Array.from({ length: 5 }, () => {
        return faker.image.urlLoremFlickr({
          category: 'biuldings',
          width: 640,
          height: 480,
        });
      }),
      { min: 1, max: 5 },
    ),
    ratingsAverage: faker.datatype.float({
      min: 1.0,
      max: 5.0,
      precision: 0.1,
    }),
    ratingsQuantity: faker.number.int({ min: 1, max: 5 }),
    importantVicinityPlaces: faker.helpers.arrayElements(
      Array.from({ length: 10 }, () => {
        return {
          name: faker.word.noun(),
          distance: faker.number.int({ min: 100, max: 1500 }),
          time: faker.number.int({ min: 10, max: 30 }),
        };
      }),

      { min: 3, max: 10 },
    ),
    country: hotelCountry,
    citySVG: `_DOMAIN_city-icons/${city}.svg`,
    amenities: faker.helpers.arrayElements(
      amenities,
      faker.number.int({ min: 3, max: 7 }),
    ),
  };

  hotels.push(hotel);
}

function generateUserData(num) {
  const users = [];
  for (let i = 0; i < num; i++) {
    const user = {
      _id: generateRandomIds(1)[0],
      name: i + faker.person.fullName(),
      email: i + faker.internet.email(),
      role: 'user',
      active: true,
      photo: faker.image.urlLoremFlickr({
        category: 'people',
        width: 480,
        height: 360,
      }),
      password: 'test1234',
      passwordConfirm: 'test1234',
    };
    users.push(user);
  }
  // Randomly select 1000 users to assign the 'hotelier' role
  const selectedHotelierIndexes = new Set();
  while (selectedHotelierIndexes.size < numberOfHoteliers) {
    const randomIndex = Math.floor(Math.random() * num);
    if (!selectedHotelierIndexes.has(randomIndex)) {
      users[randomIndex].role = 'hotelier';
      hoteliers.push(users[randomIndex]._id);
      selectedHotelierIndexes.add(randomIndex);
    }
  }
  // Randomly select 10 users to assign the 'admin' role
  const selectedAdminIndexes = new Set();
  while (selectedAdminIndexes.size < numberOfAdmins) {
    const randomIndex = Math.floor(Math.random() * num);
    if (!selectedAdminIndexes.has(randomIndex)) {
      users[randomIndex].role = 'admin';
      selectedAdminIndexes.add(randomIndex);
    }
  }

  return users;
}

users = generateUserData(numberOfUsers); //generating users
for (let i = 0; i < hoteliers.length; i++) {
  //generating hotels
  generateHotelData(hoteliers[i]);
}

for (let i = 0; i < hotels.length; i++) {
  //generating reviews
  for (let j = 0; j < faker.number.int({ min: 4, max: 10 }); j++) {
    const review = {
      review: faker.lorem.paragraph(),
      rating: faker.number.int({ min: 1, max: 5 }),
      user: users[faker.number.int({ min: 0, max: users.length - 1 })]._id,
      hotel: hotels[i]._id,
      status:
        faker.number.int({ min: 0, max: 100 }) > 80 ? 'pending' : 'confirmed',
    };
    reviews.push(review);
  }
}

fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('JSON file has been saved.');
  }
});
fs.writeFile('hotels.json', JSON.stringify(hotels, null, 2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('JSON file has been saved.');
  }
});
fs.writeFile('rooms.json', JSON.stringify(rooms, null, 2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('JSON file has been saved.');
  }
});
fs.writeFile('reviews.json', JSON.stringify(reviews, null, 2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('JSON file has been saved.');
  }
});

// for (let i = 0; i < 10; i++) {
//   console.log(
//     faker.image.urlLoremFlickr({
//       category: 'rooms',
//       width: 480,
//       height: 360,
//     }),
//   );
// }
