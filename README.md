# What's My Weather 

A Simple Weather App that shows today's weather conditions and 5 day forecasts. This app is a work in progress.

## How to use it
In the text box, type either `City, State`, or `City` or `Zip code`, then pick from the drop down, if any, to see today's weather.

e.g.

Plano

Plano, TX

A list will show up when location search finds an entry.  No list will show if the location lookup returns empty. 


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


## Running Locally
In a terminal,
- clone git repo `git clone https://github.com/kat-ausmus/whats-my-weather.git` or `git clone git://github.com/kat-ausmus/whats-my-weather.git`
- cd to `whats-my-weather` folder and then install all dependencies by typing `npm install`
- start application by typing `npm start`

In a browser, connect to `http://localhost:3000`

### Unit Test

Type `npm test` to run `Jest` unit test

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







