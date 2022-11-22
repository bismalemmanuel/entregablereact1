import React from 'react'
import BtnQuote from './BtnQuote'
import LetterQuote from './LetterQuote'
const QuoteBox = ({quoteRandom, handleClick, colorRandon}) => {
  const objStyle = {
    color: colorRandon
  }
  const objStyleBtn = {
    backgroundColor: colorRandon,
}
  return (
    <article className='card' style={objStyle} >
      <i className='card__icon fa-solid fa-quote-left'></i>
  
      <LetterQuote 
      quoteRandom ={quoteRandom}      
      />

      <BtnQuote
        objStyleBtn = {objStyleBtn}
        handleClick = {handleClick}
        />
    </article>
    )
}
export default QuoteBox