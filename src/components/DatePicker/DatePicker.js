import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { CancelButton, ConfirmButton, ButtonWrapper } from './style'

const DatePicker = ({updateDate, onCancelClick}) => {
  const [date, setDate] = useState(new Date())

  const onChange = (date) => {
    console.log('date', date)
    setDate(date)
  }

  const onButtonClick = () => {
    updateDate(date)
  }

  return(
    <>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <ButtonWrapper>
        <CancelButton onClick={onCancelClick}>
          CANCEL, DON'T CHANGE
        </CancelButton>
        <ConfirmButton onClick={onButtonClick}>CHANGE DATE</ConfirmButton>
      </ButtonWrapper>
    </>
  )
}



export default DatePicker