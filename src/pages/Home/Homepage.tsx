import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Select from '../../components/select/Select'
import WeatherCard from '../../components/weather-card/WeatherCard'
import EmptyCard from '../../components/empty-card/EmptyCard'
import { City, Coordinates } from '../../utils'

import './Homepage.scss'
import chevronLeft from '../../images/chevronLeft.svg'
import chevronRight from '../../images/chevronRight.svg'
import { timeStamp } from 'console'

const Homepage = () => {
  const [serverdata, setServerData] = useState<Array<any>>([])
  const [pastserverdata, setPastServerData] = useState<any>()
  const [index, setIndex] = useState(0)
  const [secondCardDate, setSecondCardDate] = useState<number>()
  const [secondCardCity, setSecondCardCity] = useState<City>(City.None)

  const API_KEY = '7384a8fb7699cee18fbfa10906161e96'
  const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?&exclude=minutely,hourly,alerts&appid=${API_KEY}`
  const pastUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?&appid=${API_KEY}`

  //  Function for getting data about weather for a week
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
  //  Function for getting data about weather in the past
  async function getPastData (lat?: number, lon?: number, time?: number): Promise<void> {
    try {
      const url = `${pastUrl}&lat=${lat}&lon=${lon}&dt=${time}`
      console.log('url', url)
      const { data } = (await axios.get(url))
      console.log('data', data)
      setPastServerData(data.current)
      console.log('pastserverdata', pastserverdata)
    } catch (error) {
      alert('Выбранная дата не соответствует подписке :)')
    }
  }
  //  Function for changing sity in select and showing weather cards
  function handleCityChange (city: City): void {
    if (!(Coordinates[city].lat || Coordinates[city].lon)) {
      return
    }
    const { lat, lon } = Coordinates[city]
    getData(lat, lon)
  }
  //  Function for showing 3 cards
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

  function handleChangeSecondCardDate (event: any) {
    const dateFromInput = event.target.value
    const timestamp = +(new Date(dateFromInput)) / 1000
    setSecondCardDate(timestamp)
  }

  function handlePastCityChange (city: City): void {
    setSecondCardCity(city)
  }

  useEffect(() => {
    const coords = Coordinates[secondCardCity]
    if (!(coords.lat || coords.lon) || !secondCardDate) {
      return
    }
    const { lat, lon } = coords
    getPastData(lat, lon, secondCardDate)
  }, [secondCardDate, secondCardCity])

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
                 <button className="weather-cards__button-arrow" onClick={handlePrevClick}>
                   <img src={chevronLeft} />
                  </button>
                 <div className="weather-cards__container">
               { getFormattedList().map(item =>
                <WeatherCard
                  key={item.dt}
                  item={item}
                />)}
                </div>
                <button className="weather-cards__button-arrow" onClick={handleNextClick}>
                  <img src={chevronRight} />
                </button>
            </div>
             : <EmptyCard />
           }
        </div>
          <div className="cards__item">
            <span className="cards__item__title">Forecast for a Date in the Past</span>
              <div className="">
                <Select onChange={handlePastCityChange} />
                <input type='date' className="date-input" onChange={handleChangeSecondCardDate}></input>
              </div>
                { pastserverdata
                  ? <div className="weather-cards">
                     <div className="weather-cards__container">
                    <WeatherCard
                      item={pastserverdata}
                    />
                    </div>
                </div>
                  : <EmptyCard />
                }
          </div>
      </div>
    </div>
  )
}

export default Homepage
