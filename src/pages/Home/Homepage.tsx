import React, { useState } from 'react'
import './Homepage.scss'
import axios from 'axios'
import Select from '../../components/select/Select'
import { City, Coordinates } from '../../utils'
import WeatherCard from '../../components/weather-card/WeatherCard'

const Homepage = () => {
  const [serverdata, setServerData] = useState<Array<any>>([])

  const API_KEY = '7384a8fb7699cee18fbfa10906161e96'
  const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?&exclude=minutely,hourly,alerts&appid=${API_KEY}`

  const getData = async (lat?: number, lon?: number): Promise<void> => {
    try {
      const url = `${baseUrl}&lat=${lat}&lon=${lon}`
      const { data } = (await axios.get(url))
      setServerData(data.daily)
      console.log('Here must me data update ', data.daily)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const handleCityChange = (city: City) => {
    console.log(city)
    if (!(Coordinates[city].lat || Coordinates[city].lon)) {
      return
    }
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
           { serverdata.length
             ? serverdata.map(item => <WeatherCard
                key={item.dt}
                item={item}
                className="week-card__item"
               />)
             : ''
           }
            {console.log('this is serverdata.lat from jsx ', serverdata)}
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
