import React from 'react'
import PropTypes from 'prop-types'

import './WeatherCard.scss'

const baseIconUrl = 'http://openweathermap.org/img/wn'

interface IWeatherCardProps {
  item: any;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({
  item
}) => {
  function getDate (): string {
    return item?.dt ? new Date(item.dt * 1000).toLocaleDateString() : ''
  }
  function getTemp (): string {
    return item?.temp?.day ? `${(item.temp.day - 273.15).toFixed()}°` : ''
  }
  function getSrc (): string {
    return item?.weather?.length ? `${baseIconUrl}/${item.weather[0].icon}.png` : ''
  }
  return (
    <div className="weather-card">
      <span className="weather-card__date">{getDate()}</span>
      <img src={getSrc()} className="weather-card__icon" />
      <span className="weather-card__temp">{getTemp()}</span>
    </div>
  )
}

WeatherCard.propTypes = {
  item: PropTypes.any
}

export default WeatherCard
