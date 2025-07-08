// App.jsx
import React, { useState } from 'react';
import './App.css';
import Weather from './weather'; // Corrected import path if weather.jsx is in the same directory as App.jsx

function App() {
  const [city, setCity] = useState('');

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
        {/* You need to pass the 'city' state as a prop to the Weather component */}
        <Weather city={city} />
      </div>
    </div>
  );
}

export default App;