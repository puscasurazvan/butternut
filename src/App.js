import React, { useState } from 'react'

import DatePicker from './components/DatePicker'
import Modal from './components/Modal'
import Wrapper from './components/Wrapper'
import ButtonWrapper from './components/ButtonWrapper'

import dayjs from 'dayjs'

const App = () => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const updateDate = (selectedDate) => {
    setDate(selectedDate)
    setShow(false)
  }

  const closeModal = () => {
    setShow(false)
  }

  const openModal = () => {
    setShow(true)
  }

  const renderDayAndMonth = (value) => {
    return dayjs(value).format('dddd, MMMM D')
  }

  const renderDay = (value) => {
    const date = dayjs(value).format('D')
    return (date.length === 1 ? '0' + date : '' + date)
  }


  return(
    <div className="App">
      <Wrapper
        heading='Choose your delivery day'
        smallHeading='Delivery is always free'
      >
        <ButtonWrapper
          date={renderDay(date)}
          dayAndMonth={renderDayAndMonth(date)}
          changeDate={openModal}
        />
      </Wrapper>

      {show &&
        <Modal open={show} toggle={closeModal}>
          <DatePicker updateDate={updateDate} onCancelClick={closeModal}/>
        </Modal>
      }
    </div>
  )

}

export default App;
