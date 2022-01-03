import { planoCannedResponse } from '../mockResponse/locationCannedResponse';
import { planoCurrentConditionRsp } from '../mockResponse/planoCurrentConditions';
import { plano5DayForecasts } from '../mockResponse/plano5DayForecasts';
import { getCountry, getState } from './util';

export const getSearchResults = () => {
  return planoCannedResponse.map((location) => ({
    city: location.LocalizedName,
    state: getState(location.AdministrativeArea),
    country: getCountry(location.Country),
    key: location.Key
  }));
}

export const getCurrentConditions = (locationKey) => {
  if (!locationKey) {
    return [];
  }
  return planoCurrentConditionRsp.map((condition) => ({
    conditionDescription: condition.WeatherText,
    icon: condition.WeatherIcon,
    epochTime: condition.EpochTime,
    temperature: condition.Temperature.Imperial.Value
  }));
}

export const get5DayWeatherForecasts = (locationKey) => {
  const result = []
  if (!locationKey) {
    return result;
  }
  const dailyForecasts = plano5DayForecasts.DailyForecasts.map((day) => {
    const { Temperature } = day;
    return {
      epochDate: day.EpochDate,
      lowTemperature: Temperature.Minimum.Value,
      highTemperature: Temperature.Maximum.Value,
    }
  })
  return {
    headline: plano5DayForecasts.Headline.Text,
    dailyForecasts
  }
}
