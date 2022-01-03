import React from 'react';
import { getByText, render } from '@testing-library/react';
import { OneDayForecast } from './OneDayForecast';

test('Should display one day forecast', () => {
  const day = {
    epochDate: 1641180432,
    lowTemperature: 0,
    highTemperature: 100
  }

  const { getByTestId } = render(
    <OneDayForecast day={day}/>
  )

  const dateStr = getByTestId('date-str');
  const highTemp = getByTestId('high-temp');
  const lowTemp = getByTestId('low-temp');

  expect(dateStr).toBeInTheDocument();
  expect(highTemp).toBeInTheDocument();
  expect(lowTemp).toBeInTheDocument();


  expect(getByText(dateStr, "Jan 02")).toBeTruthy();
  expect(getByText(highTemp, "100 ° F")).toBeTruthy();
  expect(getByText(lowTemp, "0 ° F")).toBeTruthy();
});
