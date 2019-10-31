import React from 'react'
import { Heading, SmallHeading, Section } from './style'

const Wrapper = ({children, changeDate, heading, smallHeading}) => {
  return(
    <Section>
      <Heading> {heading} </Heading>
      <SmallHeading> {smallHeading} </SmallHeading>
      {children}
    </Section>
  )
}

export default Wrapper