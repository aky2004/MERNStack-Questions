import React, { useEffect, useState } from 'react';

function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const API_KEY = '9ff161108afa54bbdb851f845984e3e9';

  useEffect(() => {
    if (!city) {
      setWeather(null);
      setErrorMessage('');
      return;
    }

    if (API_KEY === 'YOUR_OPENWEATHER_API_KEY' || !API_KEY) {
      setWeather(null);
      setErrorMessage('Please provide your OpenWeatherMap API key in weather.jsx');
      return;
    }

    fetchWeather();

  }, [city, API_KEY]);

  const fetchWeather = async () => {
    setErrorMessage('');
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (res.ok) {
        setWeather(data);
        setErrorMessage('');
      } else {
        console.error('Error fetching weather:', data.message);
        setWeather(null);
        setErrorMessage('No data available. Please enter a valid city.');
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      setWeather(null);
      setErrorMessage('An error occurred while fetching weather data. Please try again.');
    }
  };

  return (
    <div className="weather-info p-4 bg-gray-100 rounded-lg shadow-inner mt-4">
      {weather ? (
        <>
          <h2 className="text-xl font-bold mb-2">Weather Info for {weather.name}{weather.sys.country && `, ${weather.sys.country}`}</h2>
          <p className="text-lg">Temperature: {weather.main.temp}°C</p>
          <p className="text-lg">Condition: {weather.weather[0].description}</p>
        </>
      ) : (
        errorMessage && (
          <p className="text-red-500">{errorMessage}</p>
        )
      )}
    </div>
  );
}

export default Weather;