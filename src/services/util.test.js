const { getState, getCountry } = require('./util');
test('getState should get ID for areas that\'s of type State', () => {
  const AdministrativeArea = {
    ID: 'TX',
    LocalizedName: 'Texas',
    LocalizedType: 'State'
  }
  const result = getState(AdministrativeArea);
  expect(result).toBe('TX');
})

test('getState should get LocalizedName for areas that\'s NOT of type State', () => {
  const AdministrativeArea = {
    ID: 'TX',
    LocalizedName: 'Texas',
    EnglishType: 'State'
  }
  const result = getState(AdministrativeArea);
  expect(result).toBe('Texas');
})

test('getCountry should Get ID for country that\'s equal to US', () => {
  const Country = {
    ID: 'US',
    LocalizedName: 'United States of America',
  }
  const result = getCountry(Country);
  expect(result).toBe('US');
})

test('getCountry should Get LocalizedName for country that\'s NOT US', () => {
  const Country = {
    ID: 'UK',
    LocalizedName: 'United Kingdom',
  }
  const result = getCountry(Country);
  expect(result).toBe('United Kingdom');
})
