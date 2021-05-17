import React from 'react'
import PropTypes from 'prop-types'
import weatherbg from '../../images/weatherbg.svg'

interface IEmptyCard {
  className: string;
}

const EmptyCard: React.FC<IEmptyCard> = ({
  className
}) => {
  return (
    <div className={className}>
      <img
        className={`${className}__img`}
        src={weatherbg}
      />
      <span className={`${className}__desc`}>Fill in all the fields and the weather will be displayed</span>
    </div>
  )
}

EmptyCard.propTypes = {
  className: PropTypes.any
}

export default EmptyCard
