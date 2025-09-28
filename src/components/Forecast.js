import React from 'react'

function Forecast({ city, current, forecast: { forecastday } }) {
  return (
    <div>
      <h1 class="forecast-heading"> Forecast for 1{city}</h1>


      {
        forecastday.map((curDate) => {
          const { date, day, hour } = curDate;
          const { maxtemp_c, mintemp_c, daily_chance_of_rain, condition: { icon, text }, } = day;
          return (


            <details>
              <summary>
                {text}
                <span class="summary-icon"><img src={icon} /></span>
                <span class="summary-date no-wrap">Date: &nbsp;
                  {date}
                </span>
                <span class="summary-temp no-wrap">Temp: {mintemp_c}to {maxtemp_c}</span>
                <span class="summary-rain no-wrap">{daily_chance_of_rain}% of Rain Possible</span>
                <span class="summary-arrow"> ›</span>
              </summary>
              <div class="forecast-details">
                {hour.map((curHourForeCast, index) => {

                  return (

                    <div className="hourtrack">
                      <b>{index}:00</b>
                      <img src={curHourForeCast.condition.icon} />
                      <div class="progress-container">
                        <progress value={curHourForeCast.temp_c * 100 / maxtemp_c} max="100"></progress>
                        <div class="progress-text">{curHourForeCast.temp_c}°C</div>
                      </div>
                    </div>

                  );

                })}
              </div>
            </details>

          )

        })
      }



    </div>
  )
}

export default Forecast;
