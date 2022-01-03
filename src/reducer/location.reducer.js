export const initialState = {
  searchString: '',
  searchResults: [],
  locationKey: '',
  selectedLocation: '',
  currentConditions: [],
  fiveDayForecast: {},
  isLoading: false,
  errMsg: ''
};

export const actions = {
  SEARCH: 'search',
  SELECTED: 'selected',
  FETCH_FORECAST: 'fetchForecast',
  RESET: 'reset',
  ERROR: 'error'
}

export const reducer = (state, action) => {
  switch (action?.type) {
    case actions.SEARCH: {
      const { searchString, data } = action;
      return {
        ...state,
        searchString,
        searchResults: data,
        isLoading: (searchString !== state.searchString) && (data?.length > 0)
      };
    }
    case actions.SELECTED: {
      const { locationKey = '', value } = action;
      return {
        ...state,
        locationKey,
        searchResults: [],
        selectedLocation: value,
        isLoading: locationKey !== state.locationKey
      };
    }
    case actions.FETCH_FORECAST: {
      const { currentConditions, fiveDayForecast } = action;
      return {
        ...state,
        currentConditions,
        fiveDayForecast,
        isLoading: false
      };
    }
    case actions.RESET: {
      return {
        ...initialState
      };
    }
    case actions.ERROR: {
      const { error } = action;
      return {
        ...state,
        errMsg: error.message,
        isLoading: false
      };
    }
    default:
      return state;
  }
}
