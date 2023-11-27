import React, { useState, useEffect } from 'react';
import './CountryDetail.css';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

const CountryDetail = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const keys = Object.keys(country.languages);

  const initialize = () => {
    if (country.capital !== undefined) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital[0]}`
        )
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => console.error(error));
    } else {
      setWeather(null);
    }
  };

  useEffect(initialize, [country.capital]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div className='capital-container'>
        capital:{' '}
        {country.capital !== undefined &&
          country.capital.map((capital, index) => (
            <p key={index}>{capital} </p>
          ))}
      </div>
      <p>populaton: {country.population}</p>
      <h3>Spoken languages</h3>
      <ul>
        {keys.map((key, index) => (
          <li key={index}>{country.languages[key]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt='flag' />

      {weather !== null && (
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <p><strong>temperature:</strong>{' '}{weather.current.temperature}{' '}Celcius</p>
          <img src={weather.current.weather_icons[0]} alt='weather' />
          <p><strong>wind:</strong>{' '}{weather.current.wind_speed}{' '}mph direction {weather.current.wind_dir}</p>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
