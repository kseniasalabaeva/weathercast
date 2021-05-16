import React, { useState } from 'react'
import './Homepage.scss'
import axios from 'axios'
import Select from '../../components/select/Select'
import { City, Coordinates } from '../../utils'
import WeatherCard from '../../components/weather-card/WeatherCard'

const Homepage = () => {
  const [serverdata, setServerData] = useState<any>([])

  const API_KEY = '7384a8fb7699cee18fbfa10906161e96'

  const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?&exclude=current&appid=${API_KEY}`

  const getData = async (lat: number, lon: number): Promise<void> => {
    try {
      const url = `${baseUrl}&lat=${lat}&lon=${lon}`
      const { data } = (await axios.get(url))
      setServerData(data)
      console.log(serverdata)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const handleCityChange = (event: Event) => {
    const city = (event.target as any).value as City
    console.log(city)
    const { lat, lon } = Coordinates[city]
    console.log(lat, lon)
    getData(lat, lon)
  }

  return (
    <div className="homepage">
      <div className="header">
        <span className="header__item">Weather</span>
        <span className="header__item">forecast</span>
      </div>
      <div className="card">
        <div className="card__item week-card">
          <span className="week-card__title">7 Days Forecast</span>
          <Select
            className="week-card city-select"
            onChange={handleCityChange}
          />
            <WeatherCard
              date={serverdata.lat}
              temperature={serverdata.temp}
              className="week-card__item"
            ></WeatherCard>
            {console.log(serverdata.lat)}
        </div>
          <div className="card__item past-card">
            <span className="past-card__title">Forecast for a Datee in the Past</span>
            <select className="past-card city-select">
              <option>Bigcity1</option>
              <option>Smallcity2</option>
              <option>Largecity3</option>
            </select>
          </div>
      </div>
    </div>
  )
}

export default Homepage
