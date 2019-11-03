import React from 'react'

import './Wrapper.scss'

const Wrapper = ({children, changeDate, heading, smallHeading}) => {
  return(
    <div className='wrapper'>
      <h1 className='wrapper__heading'> {heading} </h1>
      <p className='wrapper__subHeading'> {smallHeading} </p>
      {children}
    </div>
  )
}

export default Wrapper
