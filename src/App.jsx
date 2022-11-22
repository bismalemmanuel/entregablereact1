import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import colors from './json/colors.json'

function App() {

  const getRandomFromArray=arr=>{
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }
  
 const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))
 const[colorRamdon, setColorRandom] = useState(getRandomFromArray(colors))
 
  const handleClick =()=>{
    setQuoteRandom(getRandomFromArray(quotes))
    setColorRandom(getRandomFromArray(colors))
  }

  const objStyle={
    backgroundColor: colorRamdon
  }
   
  return (
    <div className="App" style={objStyle}>
      <QuoteBox
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRamdon={colorRamdon} 
      
      />
    </div>
  )
}

export default App
