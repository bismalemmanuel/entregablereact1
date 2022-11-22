import React from 'react'
import BtnQuote from './BtnQuote'

const QuoteBox = ({quoteRandom, handleClick, colorRandom}) => {

  const objStyle = {
    color: colorRandom
  }

  const objStyleBtn = {
    backgroundColor: colorRandom
  }



  return (
    
    <article className='card' style={objStyle} >
      <i className='card__icon fa-solid fa-quote-left'></i>
      <p className='card__quote' style={objStyle} >{quoteRandom.quote} </p>
      <h1 className='card__author'>{quoteRandom.author}</h1>
      <BtnQuote  
        objStyle={objStyle}
        handleClick={handleClick}
        />

    </article>

    )
}

export default QuoteBox