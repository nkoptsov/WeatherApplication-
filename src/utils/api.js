const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const KEY = '592af2e7e3e8a9544e5ac3833f5d27da';

const request = (type, query) => {
  return fetch(`${BASE_URL}${type}${query}&units=metric`).then(response => {
    if (!response.ok) {
      throw new Error('fdslkflsd');
    }
    return response.json();
  });
};
// city it's object with one property q : city
// key it's global variable for access
export const getWeatherOnDay = ({ city }) => {
  const urlSearchCity = new URLSearchParams();
  urlSearchCity.append('q', city);
  urlSearchCity.append('APPID', KEY);

  return request(`weather?`, urlSearchCity);
};

// weather on day

export const getWeatherOnFiveDay = city => {
  const urlSearchCity = new URLSearchParams();
  urlSearchCity.append('q', city);
  urlSearchCity.append('APPID', KEY);
  return request(`forecast?`, urlSearchCity);
};
// weather on all

export const getAllWeather = city =>
  Promise.all([getWeatherOnFiveDay(city), getWeatherOnDay(city)]);
