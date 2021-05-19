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
  const [pastserverdata, setPastServerData] = useState<Array<any>>([])
  const [index, setIndex] = useState(0)
  const [date, setDate] = useState<any>()

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
      const { data } = (await axios.get(url))
      setPastServerData(data.current)
    } catch (error) {
      throw new Error(error.message)
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
  let dateFromInput: Date

  function handleDateChange (event: any) {
    dateFromInput = event.target.value
    const timestamp = +(new Date(dateFromInput)) / 1000
    console.log('this is date ', timestamp)
  }

  function handlePastCityChange (city: City): void {
    if (!(Coordinates[city].lat || Coordinates[city].lon)) {
      return
    }
    const { lat, lon } = Coordinates[city]
    console.log(lat, lon)
    getPastData(lat, lon, 1621296000)
    console.log(pastserverdata)
  }

  // function showPastData (city: any, date: any) {
  // }

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
                <input type='date' className="date-input" onChange={handleDateChange}></input>
              </div>
                { serverdata.length
                  ? <div className="weather-cards">
                      <button className="button-arrow-left" onClick={handlePrevClick}>
                        <img src={chevronLeft} />
                      </button>
                     <div className="weather-cards__container">
                   { getFormattedList().map(item =>
                    <WeatherCard
                      key={item.dt}
                      item={item}
                    />)}
                    </div>
                    <button className="button-arrow-right" onClick={handleNextClick}>
                      <img src={chevronRight} />
                    </button>
                </div>
                  : <EmptyCard />
                }
          </div>
      </div>
    </div>
  )
}

export default Homepage
