import React, { useState } from 'react'
import axios from 'axios'

import Select from '../../components/select/Select'
import WeatherCard from '../../components/weather-card/WeatherCard'
import EmptyCard from '../../components/empty-card/EmptyCard'
import { City, Coordinates } from '../../utils'

import './Homepage.scss'

const Homepage = () => {
  const [serverdata, setServerData] = useState<Array<any>>([])
  const [index, setIndex] = useState(0)

  const API_KEY = '7384a8fb7699cee18fbfa10906161e96'
  const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?&exclude=minutely,hourly,alerts&appid=${API_KEY}`

  async function getData (lat?: number, lon?: number): Promise<void> {
    try {
      const url = `${baseUrl}&lat=${lat}&lon=${lon}`
      const { data } = (await axios.get(url))
      setServerData(data.daily)
      console.log('this is value for 3 days ', serverdata)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  function handleCityChange (city: City): void {
    if (!(Coordinates[city].lat || Coordinates[city].lon)) {
      return
    }
    const { lat, lon } = Coordinates[city]
    getData(lat, lon)
  }

  function getFormattedList (): Array<any> {
    return serverdata.slice(index, index + 3)
  }

  function handlePrevClick (): void {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  function handleNextClick (): void {
    if (index < (serverdata.length - 3)) {
      setIndex(index + 1)
    }
  }

  return (
    <div className="homepage">
      <div className="header">
        <span className="header__item">Weather</span>
        <span className="header__item">forecast</span>
      </div>
      <div className="cards">
        <div className="cards__item">
          <span className="cards__item__title">7 Days Forecast</span>
          <Select onChange={handleCityChange} />
           { serverdata.length
             ? <div className="weather-cards">
                 <button onClick={handlePrevClick}>{'<'}</button>
                 <div className="weather-cards__container">
               { getFormattedList().map(item =>
                <WeatherCard
                  key={item.dt}
                  item={item}
                />)}
                </div>
                <button onClick={handleNextClick}>{'>'}</button>
            </div>
             : <EmptyCard />
           }
        </div>
          <div className="cards__item">
            <span className="cards__item__title">Forecast for a Date in the Past</span>
            <Select onChange={handleCityChange} />
           { serverdata.length
             ? serverdata.map(item =>

              <WeatherCard
                key={item.dt}
                item={item}
              />)
             : <EmptyCard />
           }
          </div>
      </div>
    </div>
  )
}

export default Homepage
