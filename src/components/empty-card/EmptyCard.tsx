import React from 'react'

import weatherbg from '../../assets/images/weatherbg.svg'
import './EmptyCard.scss'

const EmptyCard: React.FC = () => {
  return (
    <div className="bg-content">
      <img
        className="bg-content__img"
        src={weatherbg}
      />
      <span className="bg-content__desc">Fill in all the fields and the weather will be displayed</span>
    </div>
  )
}

export default EmptyCard
