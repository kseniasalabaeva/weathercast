import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Select from '../../components/select/Select'
import WeatherCard from '../../components/weather-card/WeatherCard'
import EmptyCard from '../../components/empty-card/EmptyCard'
import { City, Coordinates } from '../../utils'

import './Homepage.scss'
import chevronLeft from '../../assets/images/chevronLeft.svg'
import chevronRight from '../../assets/images/chevronRight.svg'

const Homepage = () => {
  const [weekserverdata, setWeekServerData] = useState<Array<any>>([])
  const [pastserverdata, setPastServerData] = useState<any>()
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460)
  const [pastCardDate, setPastCardDate] = useState<number>(0)
  const [pastCardCity, setPastCardCity] = useState<City>(City.None)

  const API_KEY = '7384a8fb7699cee18fbfa10906161e96'
  const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?&exclude=minutely,hourly,alerts&appid=${API_KEY}`
  const pastUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?&appid=${API_KEY}`

  /**
   * Function for getting data about weather for a week. This is function for first cards block
   * @param lat
   * @param lon
   */
  async function getWeekWeatherData (lat?: number, lon?: number): Promise<void> {
    try {
      const url = `${baseUrl}&lat=${lat}&lon=${lon}`
      const { data } = (await axios.get(url))
      setWeekServerData(data.daily)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Function for getting data about weather in the 'past'
   * @param lat
   * @param lon
   * @param time
   */
  async function getPastWeatherData (lat?: number, lon?: number, time?: number): Promise<void> {
    try {
      const url = `${pastUrl}&lat=${lat}&lon=${lon}&dt=${time}`
      const { data } = (await axios.get(url))
      setPastServerData(data.current)
    } catch (error) {
      alert('Выбранная дата не соответствует подписке :)')
    }
  }

  /**
   * Function for changing city in select and showing weather cards
   * @param city
   */
  function handleCityChange (city: City): void {
    if (!(Coordinates[city].lat || Coordinates[city].lon)) {
      return
    }
    const { lat, lon } = Coordinates[city]
    getWeekWeatherData(lat, lon)
  }

  const updateDeviceState = () => setIsMobile(window.innerWidth <= 460)

  /**
   * Function that changes the number of displayed cards in the '7 day forecact' block depending on the screen size
   *
   */
  function getFormattedList (): Array<any> {
    const max = weekserverdata.length - 3
    const shouldIndexBeChanged = !isMobile && max > 0 && index > max
    const i = shouldIndexBeChanged ? max : index
    if (shouldIndexBeChanged) {
      setIndex(max)
    }
    return weekserverdata.slice(i, i + (isMobile ? 1 : 3))
  }

  function handlePrevClick (): void {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  function handleNextClick (): void {
    const isNextAvailable = index < weekserverdata.length - (isMobile ? 1 : 3)
    if (isNextAvailable) {
      setIndex(index + 1)
    }
  }

  /**
   * Functions for changing date and city in the 'past' block
   * @param event
   */
  function handleChangePastCardDate (event: any): void {
    const date = new Date(event.target.value)
    date.setHours(12)
    const timestamp = (+date) / 1000
    setPastCardDate(timestamp)
  }

  const handlePastCityChange = (city: City) => setPastCardCity(city)

  useEffect(() => {
    window.addEventListener('resize', updateDeviceState)
  }, [])

  useEffect(() => {
    const coords = Coordinates[pastCardCity]
    if (!(coords.lat || coords.lon) || !pastCardDate) {
      return
    }
    const { lat, lon } = coords
    getPastWeatherData(lat, lon, pastCardDate)
  }, [pastCardDate, pastCardCity])

  useEffect(() => () => {
    window.removeEventListener('resize', updateDeviceState)
  }, [])

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
           { weekserverdata.length
             ? <div className="weather-cards">
                 <button className="weather-cards__button-arrow" onClick={handlePrevClick}>
                   <img src={chevronLeft} />
                  </button>
                 <div className="weather-cards__container">
               { getFormattedList().map(item =>
                <WeatherCard
                  width='174px'
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
                <input type='date'
                       className="date-input"
                       onChange={handleChangePastCardDate}
                />
              </div>
                { pastserverdata
                  ? <div className="weather-cards">
                     <div className="weather-cards__container">
                    <WeatherCard
                      width='100%'
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
