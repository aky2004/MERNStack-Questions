// App.jsx
import React, { useState } from 'react';
import './App.css';
import Weather from './weather'; 

function App() {
  const [city, setCity] = useState('Varanasi');

  return (
    <div className="App">
      <div className="card">
        <h1>Live Weather App</h1>
        <input
          type="text"
          placeholder="Enter City name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Weather city={city} />
      </div>
    </div>
  );
}

export default App;