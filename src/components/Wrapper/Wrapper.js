import React from 'react'
import { StyledWrapper } from './style'

const Wrapper = ({children, changeDate, heading, smallHeading}) => {
  return(
    <StyledWrapper.Section>
      <StyledWrapper.Heading> {heading} </StyledWrapper.Heading>
      <StyledWrapper.SmallHeading> {smallHeading} </StyledWrapper.SmallHeading>
      {children}
    </StyledWrapper.Section>
  )
}

export default Wrapper