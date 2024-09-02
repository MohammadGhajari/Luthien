const { faker, tr } = require('@faker-js/faker');

// every hotels rooms are between 10 to 20

let hotels, rooms, users, reviews;

function toCamelCase(str) {
  return str
    .split(' ') // Split the string by spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words back together
}

const cities = ['Rome', 'Paris', 'New York', 'Sydney', 'Tokyo'];
const countries = ['Italy', 'France', 'USA', 'Australia', 'Japan'];
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
const places = [
  { name: 'Bondi Beach', distance: 1, time: 10 },
  { name: 'Sydney Opera House', distance: 5, time: 30 },
  { name: 'Eiffel Tower', distance: 3, time: 15 },
];

function generateRandomIds(count) {
  const ids = [];
  for (let i = 0; i < count; i++) ids.push(faker.database.mongodbObjectId());

  return ids;
}

function generateHotelData(num) {
  const hotels = [];

  for (let i = 0; i < num; i++) {
    const hotelId = generateRandomIds(1)[0];
    const roomIds = generateRandomIds(Math.floor(Math.random() * 10) + 10); //generate between 10 to 19 ids
    const userId = generateRandomIds(1)[0];
    const country = faker.location.country();
    const city = faker.location.city();
    const hotelName = toCamelCase(
      `${faker.word.adjective()} ${faker.word.noun()}`,
    );
    const hotelCountry = faker.location.country().toLowerCase();

    const hotel = {
      _id: hotelId,
      name: hotelName,
      owner: userId,
      rooms: roomIds,
      stars: faker.number.int({ min: 1, max: 5 }),
      city: city,
      description: faker.company.catchPhrase(),
      address: `${country}, ${faker.location.state()} state, ${city}, ${faker.location.street()} street, building number ${faker.location.buildingNumber()}`,
      location: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
      },
      phone: faker.phone.number(
        `+${Math.floor(Math.random() * 100)}-###-###-####`,
      ),
      cover: `_DOMAIN_hotels/covers/${hotelName.toLocaleLowerCase().replace(/ /g, '-')}.jpg`,
      photos: [
        `_DOMAIN_hotels/photos/${faker.helpers.slugify(cities[cityIndex])}-1.jpg`,
        `_DOMAIN_hotels/photos/${faker.helpers.slugify(cities[cityIndex])}-2.jpg`,
      ],
      ratingsAverage: faker.datatype.float({
        min: 1.0,
        max: 5.0,
        precision: 0.1,
      }),
      ratingsQuantity: faker.number.int({ min: 1, max: 5 }),
      importantVicinityPlaces: faker.helpers.arrayElements(places, 2),
      country: hotelCountry,
      citySVG: `_DOMAIN_city-icons/${city}.svg`,
      amenities: faker.helpers.arrayElements(
        amenities,
        faker.datatype.number({ min: 2, max: amenities.length }),
      ),
    };

    hotels.push(hotel);
  }

  return hotels;
}

function generateUserData(num) {
  const users = [];
  for (let i = 0; i < num; i++) {
    const user = {
      _id: generateRandomIds(1)[0],
      name: faker.person.fullName(),
      email: faker.internet.email(),
      role: 'user',
      active: true,
      photo: faker.image.url(),
      password: 'test1234',
      passwordConfirm: 'test1234',
    };
  }
}

// hotels = generateData(5);
users = generateUserData(10);
