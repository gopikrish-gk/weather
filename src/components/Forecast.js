import React from 'react'

function Forecast({ city, current,forecast: { forecastday } }) {
  return (
    <div>
  <h1 class="forecast-heading">Forecast for {city}</h1>
 

      {
        forecastday.map((curDate) => (
          

  <details>
    <summary>
      <span class="summary-icon"><img src={current.condition.icon}/></span>
      <span class="summary-date">Date: 
        {curDate.date}
      </span>
      <span class="summary-temp">Temp: 27.1 to 33.4</span>
      <span class="summary-rain">80% Rain</span>
      <span class="summary-arrow"> ›</span>
    </summary>
    <div class="forecast-details">
      <p><strong>Condition:</strong> Moderate rain</p>
      <p>Humidity: High</p>
      <p>Wind: 15 km/h</p>
    </div>
  </details>



        ))
      }



    </div>
  )
}

export default Forecast
