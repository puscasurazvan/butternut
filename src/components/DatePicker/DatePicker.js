import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './DatePicker.scss'

const DatePicker = ({updateDate, onCancelClick}) => {
  const [date, setDate] = useState(new Date())

  const onChange = (date) => {
    setDate(date)
  }

  const onButtonClick = () => {
    updateDate(date)
  }

  return(
    <>
      <Calendar
        className={['calendar']}
        onChange={onChange}
        value={date}
      />
      <div className='buttons-wrapper'>
        <button className='buttons-wrapper__cancel-button' onClick={onCancelClick}>
          CANCEL, DON'T CHANGE
        </button>
        <button className='buttons-wrapper__confirm-button'onClick={onButtonClick}>CHANGE DATE</button>
      </div>
    </>
  )
}



export default DatePicker