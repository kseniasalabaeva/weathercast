import React from 'react'
import PropTypes from 'prop-types'

import './WeatherCard.scss'

const baseIconUrl = 'http://openweathermap.org/img/wn'

interface IWeatherCardProps {
  item: any;
  width?: string
}

const WeatherCard: React.FC<IWeatherCardProps> = ({
  item,
  width,
  ...props
}) => {
  function getDate (): string {
    console.log('Get data', item.dt)
    return item?.dt ? new Date(item.dt * 1000).toLocaleDateString() : ''
  }
  function getTemp (): string {
    console.log('Get temp', item.temp.day)
    if (item.temp.day) {
      return item?.temp?.day ? `${(item.temp.day - 273.15).toFixed()}°` : ''
    }
    return item?.temp ? `${(item.temp - 273.15).toFixed()}°` : ''
  }
  function getSrc (): string {
    console.log('Get icon', item.weather[0].icon)
    return item?.weather?.length ? `${baseIconUrl}/${item.weather[0].icon}.png` : ''
  }
  return (
    <div className="weather-card"
         style={{ width: width }}>
      <div className="weather-card__container">
        <span className="weather-card__date">{getDate()}</span>
        <img src={getSrc()} className="weather-card__icon" />
        <span className="weather-card__temp">{getTemp()}</span>
      </div>
    </div>
  )
}

WeatherCard.propTypes = {
  item: PropTypes.any,
  width: PropTypes.string
}

export default WeatherCard
