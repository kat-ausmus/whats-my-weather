import { IconContext } from 'react-icons';
import { WhatsMyWeather } from './components/WhatsMyWeather';

const App = () => {
  return (
    <div className="App">
      <IconContext.Provider value={{ color: "green", size: "2rem", className: "react-icons" }}>
        <WhatsMyWeather/>
      </IconContext.Provider>
    </div>
  );
}
export default App;
