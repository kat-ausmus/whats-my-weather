import React from 'react';
import { getByText, render } from '@testing-library/react';
import { get5DayWeatherForecasts } from '../services/local.service';
import FiveDayForecast from './FiveDayForecast';

test('Should display 5 day forecast', () => {
  const state = {
    fiveDayForecast : get5DayWeatherForecasts('someKey')
  }

  const { getByTestId } = render(
    <FiveDayForecast state={state}/>
  )

  const headline = getByTestId('headline');
  expect(headline).toBeInTheDocument();
  expect(getByText(headline, 'Turning much colder tomorrow')).toBeTruthy();

});
