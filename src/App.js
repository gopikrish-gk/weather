import './App.css';

function App() {

  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  return (
    <div className="App">
      <div className="weather-card">
        <div className="search">
          <input type="search" placeholder="enter city name" spellCheck="false"  />
        </div>
        <div className="weather">
          <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="..." />
          <h1 className="temp">15°C </h1>
          <h2 className="city">new york</h2>
          <div className="details">
            <div style={{ display: 'flex' }} className="col">
              <img className="humi" src="https://cdn-icons-png.flaticon.com/512/1582/1582886.png" />
              <div className="info">
                <p className="humidity">50%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png" />
              <div className="info">
                <p className="wind">15 km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       </div>
      );
}

      export default App;
