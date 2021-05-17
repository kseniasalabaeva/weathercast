import React, { ChangeEvent, useState } from 'react'
import PropTypes from 'prop-types'

import { City } from '../../utils'

import './Select.scss'

interface ISelectProps {
  className: string,
  onChange: any
}

const Select: React.FC<ISelectProps> = ({
  className,
  onChange
}) => {
  const [value, setValue] = useState(City.None)

  const handleChangeCity = (event: ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value as City
    setValue(city)
    onChange(city)
  }

  return (
    <select onChange={handleChangeCity}
            value={value}
            className={className}
    >
      {Object.values(City).map((city, index) => <option key={city} disabled={!index}>{city}</option>)}
    </select>
  )
}

Select.propTypes = {
  className: PropTypes.any,
  onChange: PropTypes.any
}

export default Select
