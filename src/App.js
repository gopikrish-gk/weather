import { useEffect, useState } from 'react';
import './App.css';
import Current from './components/current';
import Forecast from './components/Forecast';

function App() {

  const weatherUrl = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=34d644fece344f64a0c131427252709&q=${city}&days=7&aqi=no&alerts=no`;

  const autoComplete =
    'https://api.weatherapi.com/v1/search.json?key=34d644fece344f64a0c131427252709&q=';

  const [clicked, setClicked] = useState(false);
  const [city, setCity] = useState('');
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState('');
  const [citySuggestion, setCitySuggestion] = useState([]);

  const handleClick = async (clickedCity) => {
    setCity(clickedCity);
    setClicked(true);
    try {
      const res = await fetch(weatherUrl(clickedCity));
      const data = await res.json();
      setCurrent(data.current);
      setForecast(data.forecast);
      setLocation(data.location.name);
    } catch (error) {
      console.error("Failed to fetch weather:", error);
    }
  };
  useEffect(() => {
    const getDataAfterTimeOut = setTimeout(() => {
      const fetchCitySuggestion = async () => {
        try {
          const response = await fetch(autoComplete + city);
          const data = await response.json();
          const citySuggestionData = data.map(
            (curData) => `${curData.name},${curData.region},${curData.country}`
          );
          setCitySuggestion(citySuggestionData);
        } catch (error) {
          console.error("Failed to fetch suggestions:", error);
        }
      };
      if (!clicked && city.length > 1) {
        fetchCitySuggestion();
      } else {
        setCitySuggestion([]);
        setClicked(false);
      }
    }, 500);

    return () => clearTimeout(getDataAfterTimeOut);
  }, [city]);

  return (
    <div className="App">
      <div className="header">
        {current?.condition?.icon && (
          <img src={current.condition.icon} alt="weather icon" />
        )}
        Weather Dashboard
      </div>

      <div className="App-header">
        <input
          type="text" id="myInput"
          className="cityTextBox"
          placeholder="Enter the City..."
          onChange={(event) => {
            setCity(event.target.value);
            setClicked(false);
          }}
          value={city}
        />

        <div className="suggestionWrapper">
          {citySuggestion.map((curCity, index) => (
            <div
              key={index}
              className="suggestion"
              onClick={() => handleClick(curCity)}
            >
              {curCity}
            </div>
          ))}
        </div>

        {current && <Current current={current} city={location} />}
        {forecast && <Forecast forecast={forecast} city={location} current={current} />}
      </div>
    </div>
  );
}

export default App;
