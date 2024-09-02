const axios = require('axios');

// Your API key from OpenCage Geocoding API
const API_KEY = '199170a2746541269ffb4c0b5f89c037'; // Replace with your OpenCage API key

// List of cities and countries
const cities = [
  { city: 'Paris', country: 'France' },
  { city: 'Dubai', country: 'United Arab Emirates' },
  { city: 'Madrid', country: 'Spain' },
  { city: 'Tokyo', country: 'Japan' },
  { city: 'Amsterdam', country: 'Netherlands' },
  { city: 'Berlin', country: 'Germany' },
  { city: 'New York City', country: 'United States' },
  { city: 'Barcelona', country: 'Spain' },
  { city: 'London', country: 'United Kingdom' },
  { city: 'Singapore', country: 'Singapore' },
  { city: 'Munich', country: 'Germany' },
  { city: 'Milan', country: 'Italy' },
  { city: 'Seoul', country: 'South Korea' },
  { city: 'Dublin', country: 'Ireland' },
  { city: 'Osaka', country: 'Japan' },
  { city: 'Hong Kong', country: 'Japan' },
  { city: 'Vienna', country: 'Austria' },
  { city: 'Los Angeles', country: 'United States' },
  { city: 'Lisbon', country: 'Portugal' },
  { city: 'Prague', country: 'Czech Republic' },
  { city: 'Sydney', country: 'Australia' },
  { city: 'Istanbul', country: 'Turkey' },
  { city: 'Melbourne', country: 'Australia' },
  { city: 'Orlando', country: 'Florida' },
  { city: 'Kyoto', country: 'Japan' },
  { city: 'Frankfurt', country: 'Germany' },
  { city: 'Taipei', country: 'Taiwan' },
  { city: 'Florence', country: 'Italy' },
  { city: 'Toronto', country: 'Canada' },
  { city: 'Athens', country: 'Greece' },
  { city: 'Zurich', country: 'Switzerland' },
  { city: 'Bangkok', country: 'Thailand' },
  { city: 'Las Vegas', country: 'United States' },
  { city: 'Miami', country: 'United States' },
  { city: 'San Francisco', country: 'United States' },
  { city: 'Kuala Lumpur', country: 'Malaysia' },
  { city: 'Venice', country: 'Italy' },
  { city: 'Abu Dhabi', country: 'United Arab Emirates' },
  { city: 'Stockholm', country: 'Sweden' },
  { city: 'Brussels', country: 'Belgium' },
  { city: 'Tel Aviv', country: 'Israel' },
  { city: 'Shanghai', country: 'China' },
  { city: 'Warsaw', country: 'Poland' },
  { city: 'Guangzhou', country: 'China' },
  { city: 'Beijing', country: 'China' },
  { city: 'Copenhagen', country: 'Denmark' },
  { city: 'Nice', country: 'France' },
  { city: 'Washington', country: 'United States' },
  { city: 'Budapest', country: 'Hungary' },
  { city: 'Shenzhen', country: 'China' },
  { city: 'Vancouver', country: 'Canada' },
  { city: 'Palma de Mallorca', country: 'Spain' },
  { city: 'Seville', country: 'Spain' },
  { city: 'São Paulo', country: 'Brazil' },
  { city: 'Valencia', country: 'Spain' },
  { city: 'Mexico City', country: 'Mexico' },
  { city: 'Playa Del Carmen', country: 'Mexico' },
  { city: 'Antalya', country: 'Turkey' },
  { city: 'Sapporo', country: 'Japan' },
  { city: 'Fukuoka', country: 'Japan' },
  { city: 'Busan', country: 'South Korea' },
  { city: 'Edinburgh', country: 'United Kingdom' },
  { city: 'Porto', country: 'Portugal' },
  { city: 'Jerusalem', country: 'Israel' },
  { city: 'Kraków', country: 'Poland' },
  { city: 'Rio de Janeiro', country: 'Brazil' },
  { city: 'Honolulu', country: 'Hawaii' },
  { city: 'Montreal', country: 'Canada' },
  { city: 'Doha', country: 'Qatar' },
  { city: 'Sharjah', country: 'United Arab Emirates' },
  { city: 'Rhodes', country: 'Greece' },
  { city: 'Verona', country: 'Italy' },
  { city: 'Bologna', country: 'Italy' },
  { city: 'Thessaloniki', country: 'Greece' },
  { city: 'Heraklion', country: 'Greece' },
  { city: 'Buenos Aires', country: 'Argentina' },
  { city: 'Lima', country: 'Peru' },
  { city: 'Phuket', country: 'Thailand' },
  { city: 'Pattaya-Chonburi', country: 'Thailand' },
  { city: 'Delhi', country: 'India' },
  { city: 'Tallinn', country: 'Estonia' },
  { city: 'Ho Chi Minh City', country: 'Vietnam' },
  { city: 'Johor Bahru', country: 'Malaysia' },
  { city: 'Johor Bahru', country: 'Malaysia' },
  { city: 'Santiago', country: 'Chile' },
  { city: 'Tbilisi', country: 'Georgia' },
  { city: 'Riyadh', country: 'Saudi Arabia' },
  { city: 'Marrakech', country: 'Morocco' },
  { city: 'Vilnius', country: 'Lithuania' },
  { city: 'Mugla', country: 'Turkey' },
  { city: 'Zhuhai', country: 'China' },
  { city: 'Mecca', country: 'Saudi Arabia' },
  { city: 'Punta Cana', country: 'Dominican Republic' },
  { city: 'Guilin', country: 'China' },
  { city: 'Hanoi', country: 'Vietnam' },
  { city: 'Cairo', country: 'Egypt' },
  { city: 'Muscat', country: 'Oman' },
];

// Function to fetch latitude and longitude for each city
async function fetchCoordinates(city, country) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city + ', ' + country)}&key=${API_KEY}&limit=1`;
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { city, country, lat, lng };
    } else {
      console.error(`No coordinates found for ${city}, ${country}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching coordinates for ${city}, ${country}:`, error);
    return null;
  }
}

// Main function to process all cities
async function processCities() {
  const data = [];

  for (const location of cities) {
    const result = await fetchCoordinates(location.city, location.country);
    if (result) {
      data.push(result);
    }
  }
  console.log(data);
  console.log(cities.length);
  console.log(data.length);
}

// Start the process
processCities();
