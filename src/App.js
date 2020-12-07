import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [btcPrice, setBtcPrice] = useState(0);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(res => res.json())
    .then(
      (response) => {
        if(response) {
          setBtcPrice(response['bitcoin']['usd']);
        }
        setIsLoading(false);
      },
      (error) => {
        console.log(`Error loading BTC Price: ${error}`)
        setIsLoading(false);
      }
    );
  }, [])

  return isLoading ? <Loading/> : <Converter btcPrice={btcPrice}/>;
}

// This displays the actual converter
function Converter(props) {

  const [convertedUsd, setConvertedUsd] = useState(null);
  const [convertedBtc, setConvertedBtc] = useState(null);

  const updateCurrency = (focused, event) => {
    const input = event.target.value ?? 0;

    /**
     * Update based on input that is in focus
     * 0 -> BTC Input
     * 1 -> USD input
     */
    if (focused === 0) {
      setConvertedBtc(input);
      setConvertedUsd(input * props.btcPrice);
    } else {
      setConvertedUsd(input);
      setConvertedBtc(input / props.btcPrice);
    }
  }

  return (
    <div className="App Center">
      <span id="app-name">BTC2USD Converter</span>

      <form className="Converter" >
        <label>BTC</label>
        <input 
          type="number" 
          value={convertedBtc || ''}
          onChange={(event) => updateCurrency(0, event)}
        />

        <label>USD</label>
        <input 
          type="number" 
          value={convertedUsd || ''}
          onChange={(event) => updateCurrency(1, event)}
        />
      </form>
    </div>
  );
}

// This shows the loading state
function Loading() {
  return (
    <span className="Center"> Loading... </span>
  )
}

export default App;
