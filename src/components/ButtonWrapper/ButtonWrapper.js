import React from 'react'
import calendar from './assets/calendar.svg';
import Details from './components/Details';


import { Section, Button, Figure, FigureCaption, } from './style'

const Wrapper = ({changeDate, date, dayAndMonth}) => {
  return(
    <Section>
      <Details deliveryDayAndMonth={dayAndMonth}/>
      <Button onClick={changeDate}>
        <Figure>
          <img src={calendar} alt="calendar"/>
          <FigureCaption>{date}</FigureCaption>
        </Figure>
        Change
      </Button>
      
    </Section>
  )
}

export default Wrapper