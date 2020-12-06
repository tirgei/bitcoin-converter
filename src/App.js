import './App.css';

function App() {
  return (
    <div className="App">
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

export default App;
