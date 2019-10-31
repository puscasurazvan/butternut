import React, { useState } from 'react'
import DatePicker from './components/DatePicker'
import Modal from './components/Modal'
import Wrapper from './components/Wrapper'
import ButtonWrapper from './components/ButtonWrapper'
import * as moment from 'moment';

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


  return(
    <div className="App">
      <Wrapper
        heading='Choose your delivery' 
        smallHeading='Delivery is always free'
      >
        <ButtonWrapper
          date={moment(date).format('D')}
          dayAndMonth={moment(date).format('dddd, MMMM D')}
          changeDate={() => setShow(true)}
        />
      </Wrapper>

      {show &&
        <Modal open={show} toggle={closeModal}>
          <button onClick={closeModal}>
            &times;
          </button>
          <DatePicker updateDate={updateDate} onCancelClick={closeModal}/>
        </Modal>
      }
    </div>
  )

}

export default App;
