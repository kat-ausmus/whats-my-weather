import config from '../config/config';
import { getCountry, getState } from './util';

const { baseUrl } = config;
const fetchIt = async ({ partialUrl, q = '' }) => {
  const url = `${baseUrl}/${partialUrl}?apikey=${config.accuWeather.apiKey}${q}`;
  const res = await fetch(url);
  if (!res.ok) {
    const message = `An error has occurred while fetching data: status code ${res.status}`;
    throw new Error(message);
  }
  return res;
}
const api = {
  async getLocationSearchResults(location) {
    const res = await fetchIt({ partialUrl: `locations/v1/search`, q: `&q=${location}` });
    const results = await res.json();

    if (results?.length > 0) {
      return results.map((location) => ({
        city: location.LocalizedName,
        state: getState(location.AdministrativeArea),
        country: getCountry(location.Country),
        key: location.Key
      }))
    }
    return results;
  },
  async getCurrentConditions(locationKey) {
    const res = await fetchIt({ partialUrl: `currentconditions/v1/${locationKey}` });
    const results = await res.json();

    if (results?.length > 0) {
      return results.map((condition) => ({
        conditionDescription: condition.WeatherText,
        icon: condition.WeatherIcon,
        epochTime: condition.EpochTime,
        temperature: condition.Temperature.Imperial.Value
      }));
    }
    return results;
  },
  async get5DayForecasts(locationKey) {
    const res = await fetchIt({ partialUrl: `forecasts/v1/daily/5day/${locationKey}` });

    const results = await res.json();

    if (results?.DailyForecasts) {
      const dailyForecasts = results.DailyForecasts.map((day) => {
        const { Temperature } = day;
        return {
          epochDate: day.EpochDate,
          lowTemperature: Temperature.Minimum.Value,
          highTemperature: Temperature.Maximum.Value,
        }
      })
      return ({
        headline: results.Headline.Text,
        dailyForecasts
      });
    }
    return results;
  }
};

export default api;
