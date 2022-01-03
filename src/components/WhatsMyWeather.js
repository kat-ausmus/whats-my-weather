import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import { WiSunrise } from 'react-icons/wi';
import LocationFinder from './LocationFinder';
import CurrentConditions from './CurrentConditions';
import FiveDayForecast from './FiveDayForecast';
import WeatherFooter from './WeatherFooter';
import { useEffect, useReducer, useState } from 'react';
import { actions, initialState, reducer } from '../reducer/location.reducer';
import { useDebounce } from 'use-lodash-debounce';
import '../App.css';
import { message, Spin } from 'antd';
import accuweatherService from '../services/accuWeather.service';

export const WhatsMyWeather = () => {
  const [input, setInput] = useState('');
  const debouncedValue = useDebounce(input, 800);
  const [currState, dispatch] = useReducer(reducer, initialState);
  const { locationKey, errMsg } = currState;


  useEffect(() => {
    const inputTrimmed = debouncedValue;
    if (inputTrimmed.length > 1) {
      const fetchData = async () => {
        const data = await accuweatherService.getLocationSearchResults(inputTrimmed);
        dispatch({ type: actions.SEARCH, searchString: inputTrimmed, data });
      }
      fetchData().catch(error => dispatch({ type: actions.ERROR, error }))
    } else if (debouncedValue.length === 0) {
      dispatch({ type: actions.RESET });
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (locationKey) {
      const fetchData = async () => {
        try {
          const [currentConditions, fiveDayForecasts] = await Promise.all([
            await accuweatherService.getCurrentConditions(locationKey),
            await accuweatherService.get5DayForecasts(locationKey)
          ]);
          dispatch({ type: actions.FETCH_FORECAST, currentConditions, fiveDayForecasts });
        } catch (error) {
          throw error;
        }
      }
      fetchData().catch(error => dispatch({ type: actions.ERROR, error }))
    }
  }, [locationKey]);

  useEffect(() => {
    if (errMsg) {
      message.error(errMsg);
    }
  }, [errMsg]);

  const handleSearch = (value) => {
    setInput(value);
  };

  const handleSelect = (value, option) => {
    dispatch({ type: actions.SELECTED, locationKey: option.key, value: option.value });
  }

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <WiSunrise className="appLogo"/>
        <LocationFinder state={currState} onSearch={handleSearch} onSelect={handleSelect}/>
      </Header>
      <Content className="site-layout" style={{ padding: '0 0.5rem', marginTop: 64 }}>
        {currState.isLoading && <Spin/>}
        <CurrentConditions state={currState}/>
        <FiveDayForecast state={currState}/>
      </Content>
      <Footer id="footer" style={{ textAlign: 'center' }}>
        <WeatherFooter/>
      </Footer>
    </Layout>
  )
}
