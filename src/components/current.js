import React from 'react'

const Current = ({ current, city }) => {
    return (
        <div className='body-div'>
            <div class="weather-card">
                <h3>Current Weather</h3>
                <div class="weather-icon"><img src={current.condition.icon} /></div>
                <div class="location">{current.condition.text}</div>
                <div class="temperature">{current.temp_c}°C</div>
                <div class="location">Feels like - {current.feelslike_c}°C</div>
                <div class="location">{city} - Location</div>
                <div class="details">Humidity : {current.humidity}% | Wind : {current.wind_kph} km/h</div>
            </div>
        </div>
    )
}

export default Current;
