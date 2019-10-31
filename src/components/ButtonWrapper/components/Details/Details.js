import React from 'react'

import { StyledDetails } from './style'
import van from '../../assets/van.svg';

const Details = ({deliveryDayAndMonth}) => {
  return(
    <StyledDetails.SmallSection>
      <StyledDetails.Heading>{deliveryDayAndMonth}</StyledDetails.Heading>
      <StyledDetails.Paragraph>
        <img src={van} alt="van"/>
        Earliest delivery
      </StyledDetails.Paragraph>
  </StyledDetails.SmallSection>
  )
}

export default Details