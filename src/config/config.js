const base = {
  baseUrl: 'https://dataservice.accuweather.com'
}
const dev = {
  ...base,
  accuWeather: {
    apiKey: "4xKlZ2kpx8EyfVsfJy67xCWZLlK8A3yT"
  }
};

const prod = {
  ...base,
  accuWeather: {
    apiKey: "QvmN8o5pGRpX3ZpgGKsSQHRz9kYWAt8U"
  }
};

const config = process.env.REACT_APP === 'production' ? dev : prod;

export default config;
