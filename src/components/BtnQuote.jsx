import React from 'react'

const BtnQuote = ({objStyle,handleClick}) => {
  return (
    <button className='card__btn'  style={objStyle} 
    onClick={handleClick}> &gt;</button>
  )
} 

export default BtnQuote