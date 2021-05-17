import React from 'react'
import PropTypes from 'prop-types'

const baseIconUrl = 'http://openweathermap.org/img/wn'

interface IWeatherCardProps {
  className: string;
  item: any;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({
  className,
  item
}) => {
  const getDate = () => {
    return item?.dt ? new Date(item.dt * 1000).toLocaleDateString() : ''
  }
  const getTemp = () => {
    return item?.temp?.day ? (item.temp.day - 273.15).toFixed() : ''
  }
  const getSrc = () => {
    return item?.weather?.length ? `${baseIconUrl}/${item.weather[0].icon}.png` : ''
  }
  return (
      <div className={className}>
        <span>Date = {getDate()}, </span>
        <span>Temperature = {getTemp()}</span>
        <img src={getSrc()} />
      </div>
  )
}

WeatherCard.propTypes = {
  className: PropTypes.any,
  item: PropTypes.any
}

export default WeatherCard
