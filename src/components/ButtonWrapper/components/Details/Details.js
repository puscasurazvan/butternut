import React from 'react'

import van from '../../assets/van.svg'

import './Details.scss'

const Details = ({deliveryDayAndMonth}) => {
  return(
    <div className='details'>
      <p className='details__delivery-date'>{deliveryDayAndMonth}</p>
      <div className="details__copy">
        <img src={van} alt="van"/>
        <p className='details__copy__paragraph'>Earliest delivery</p>
      </div>
    </div>
  )
}

export default Details
