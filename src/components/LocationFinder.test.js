import React from 'react';
import { fireEvent, getByText, render } from '@testing-library/react';
import LocationFinder from './LocationFinder';
import { getSearchResults } from '../services/local.service';

test('Should display Autocomplete input control', () => {
  const state = {
    selectedLocation: '',
    currentConditions: [],
    searchResults: getSearchResults()
  }
  const handleSearch = () => ('handle-search');
  const handleSelect = () => ('handle-select');

  const { getByTestId } = render(
    <LocationFinder state={state} onSearch={handleSearch} onSelect={handleSelect}/>
  )

  const autocomplete = getByTestId('autocomplete');
  fireEvent.mouseDown(autocomplete);

  expect(autocomplete).toBeInTheDocument();
  setInterval(() => {
    const option340969 = getByTestId('340969');
    expect(getByText(option340969)).toBeVisible()
  }, 0);

});
