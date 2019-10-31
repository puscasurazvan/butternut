import React from 'react'

import { Heading, Paragraph, SmallSection } from './style'
import van from '../../assets/van.svg';

const Details = ({deliveryDayAndMonth}) => {
  return(
    <SmallSection>
      <Heading>{deliveryDayAndMonth}</Heading>
      <Paragraph>
        <img src={van} alt="van"/>
        Earliest delivery
      </Paragraph>
  </SmallSection>
  )
}

export default Details