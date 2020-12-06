import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [btcPrice, setBtcPrice] = useState(null);

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

  return isLoading ? Loading() : Converter();
}

// This displays the actual converter
function Converter() {
  return (
    <div className="App Center">
      <span id="app-name">BTC2USD Converter</span>

      <form className="Converter" >
        <label>BTC</label>
        <input type="number" min="0"/>
        <label>USD</label>
        <input type="number" min="0"/>
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
