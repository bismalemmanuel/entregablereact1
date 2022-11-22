import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json';
import { useState } from 'react';
import colors from './json/colors.json';

function App() {
  const getRandomFromArray = (arr) => {
    const indexRandom = Math.floor(arr.length * Math.random());
    return arr[indexRandom];
  };
  const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes));
  const [colorRandon, setColorRandom] = useState(getRandomFromArray(colors));
  
  const handleClick = () => {
    setQuoteRandom(getRandomFromArray(quotes));
    setColorRandom(getRandomFromArray(colors));
  };

  const objStyle = {
    backgroundColor: colorRandon,
  };
  return (
    <div className="App" style={objStyle}>
      <QuoteBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandon={colorRandon}
      />
    </div>
  );
}
export default App;