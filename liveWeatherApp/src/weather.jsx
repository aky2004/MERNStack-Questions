// weather.jsx
import React, { useEffect, useState } from 'react';

function Weather({ city }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Only fetch weather if a city is provided
    if (city) {
      fetchWeather();
    } else {
      // If city is empty, clear any previously displayed weather data
      setWeather(null);
    }
  }, [city]); // Re-run this effect whenever the 'city' prop changes

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();

      if (res.ok) {
        setWeather(data);
      } else {
        // Handle specific API errors (e.g., city not found)
        console.error('Error fetching weather:', data.message);
        setWeather(null); // Clear weather data on error
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      setWeather(null); // Clear weather data on network errors
    }
  };

  return (
    <div className="weather-info">
      {weather ? (
        <>
          <h2>Weather Info for {weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </>
      ) : (
        <p>No data available. Please enter a valid city.</p>
      )}
    </div>
  );
}

export default Weather;