# What's My Weather 

A Simple Weather App that shows today's weather conditions and 5 day forecasts. This app is a work in progress.

## Requirements
`node v16`  

install node using `nvm install --lts` assuming you are running in Mac OS

## Version
0.1.0

## Libraries
- `antd` for UI components
- `dayjs` for date/time related conversions
- `react-icons` for showing icons
- `use-lodash-debounce` for input debouncing

In the project directory, you can run:

## Running Locally
In a terminal,
- clone git repo `git clone https://github.com/kat-ausmus/whats-my-weather.git`
- cd to `whats-my-weather` folder and then install all dependencies by typing `npm install`
- start application by typing `npm start`

In a browser, connect to `http://localhost:3000`

## TODO's
- unit tests
- research more on AccuWeather location search, some search results are funky.

### Researched the following Weather API but did not consider them:
 1. `darksky.net` doesn't accept new signups
 2. `openweathermap.org`
    - requires downloading a CSV file for location search in order to use their `Autocomplete` endpoint
    - response does not include state code
 3. `weather.gov` - requires lat/long input and only works in the US
 4. `weatherbit.io` - same issue as `openweathermap.org`
 5. `tomorrow.io` - seems complicated.

### Why AccuWeather.com
1. supports search by cities, postal codes (included in app) and lat/long (not included in app)
2. global city/ postal codes search
3. provides autocomplete API
4. 50 calls per day on free account, 220K for paid account, which is the PROD key

### Config
In `/src/config/config.js` a `dev` api key (limit of 50 calls)
and a `prod` api key is supplied.  It is NOT a good place to store api keys.
Normally, they should be injected via environment variables. 

The apiKey should be stored in a `vault` or something similar in production.






