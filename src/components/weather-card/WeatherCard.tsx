import React from 'react'
import PropTypes from 'prop-types'

interface IWeatherCardProps {
  className: string
  date: string
  temperature: string
}

const WeatherCard: React.FC<IWeatherCardProps> = ({
  className,
  date,
  temperature
}) => {
  return (
      <div className={className}>
        <span>{date}</span>
        <span>{temperature}</span>
      </div>
  )
}

WeatherCard.propTypes = {
  className: PropTypes.any,
  date: PropTypes.any,
  temperature: PropTypes.any
}

export default WeatherCard
