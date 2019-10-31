import React from 'react'
import calendar from './assets/calendar.svg';
import Details from './components/Details';


import { StyledButtonWrapper } from './style'

const Wrapper = ({changeDate, date, dayAndMonth}) => {
  return(
    <StyledButtonWrapper.Section>
      <Details deliveryDayAndMonth={dayAndMonth}/>
      <StyledButtonWrapper.Button onClick={changeDate}>
        <StyledButtonWrapper.Figure>
          <img src={calendar} alt="calendar"/>
          <StyledButtonWrapper.FigureCaption>
            {date}
          </StyledButtonWrapper.FigureCaption>
        </StyledButtonWrapper.Figure>
        Change
      </StyledButtonWrapper.Button>
      
    </StyledButtonWrapper.Section>
  )
}

export default Wrapper