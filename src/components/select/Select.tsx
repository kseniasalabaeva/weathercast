import React, { ChangeEventHandler } from 'react'
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
  return (
    <select onChange={onChange} className={className}>
      {Object.values(City).map(city => <option key={city}>{city}</option>)}
    </select>
  )
}

Select.propTypes = {
  className: PropTypes.any,
  onChange: PropTypes.any
}

export default Select
