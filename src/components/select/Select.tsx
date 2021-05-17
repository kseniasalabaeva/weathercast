import React, { ChangeEvent, useState } from 'react'
import PropTypes from 'prop-types'

import { City } from '../../utils'

import './Select.scss'

type OnChangeType = (city: City) => void

interface ISelectProps {
  onChange: OnChangeType | undefined;
}

const Select: React.FC<ISelectProps> = ({
  onChange
}) => {
  const [value, setValue] = useState(City.None)

  function handleChangeCity (event: ChangeEvent<HTMLSelectElement>): void {
    const city = event.target.value as City
    setValue(city)
    onChange && onChange(city)
  }

  return (
    <select onChange={handleChangeCity} value={value}>
      {Object.values(City).map((city, index) => <option key={city} disabled={!index}>{city}</option>)}
    </select>
  )
}

Select.propTypes = {
  onChange: PropTypes.func
}

export default Select
