import React from 'react'
import calendar from './assets/calendar.svg';
import Details from './components/Details';


import './ButtonWrapper.scss'

const Wrapper = ({changeDate, date, dayAndMonth}) => {

  return(
    <>
      <button className='change-delivery' onClick={changeDate}>
        <Details deliveryDayAndMonth={dayAndMonth}/>
        <figure className='change-delivery__icon'>
          <img src={calendar} alt="calendar"/>
          <figcaption className='change-delivery__icon-day'>
            {date}
          </figcaption>
          <p className="change-derlivery__icon-copy">Change</p>
        </figure>
      </button>
      
    </>
  )
}

export default Wrapper