import React from 'react';
import { getByText, render } from '@testing-library/react';
import CurrentConditions from './CurrentConditions';
import { getCurrentConditions } from '../services/local.service';

test('Should display today\'s condition', () => {
  const testLocation = 'qwerty'
  const state = {
    selectedLocation: testLocation,
    currentConditions: getCurrentConditions('tootoot')
  }

  const { getByTestId } = render(
    <CurrentConditions state={state}/>
  )

  const selectedLocation = getByTestId("selected-loc");
  const conditionDescription = getByTestId("condition-desc");
  const conditionTemperature = getByTestId("condition-temp");

  expect(selectedLocation).toBeInTheDocument();
  expect(conditionDescription).toBeInTheDocument();
  expect(conditionTemperature).toBeInTheDocument();

  expect(getByText(selectedLocation, testLocation)).toBeTruthy();
  expect(getByText(conditionDescription, "Mostly cloudy")).toBeTruthy();
  expect(getByText(conditionTemperature, "33° F")).toBeTruthy();
});
