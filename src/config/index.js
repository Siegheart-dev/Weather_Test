export default {
  app: {
    maxCityCount: 20,
  },
  api: {
    baseUrl: '//api.openweathermap.org/data/2.5',
    key: '38fc89f0181a3548c21cd8cb134467f9',
  },
  storage: {
    prefix: 'react_redux_weather_app_prefix__',
    keys: {
      favorites: 'favorites',
    }
  },
  geolocation: {
    defaultLat: 0,
    defaultLon: 0,
    options: {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 0
    }
  }
}
