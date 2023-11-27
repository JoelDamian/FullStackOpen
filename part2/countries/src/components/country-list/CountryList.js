import React, { useState, useEffect } from 'react';
import CountryDetail from '../country-detail/CountryDetail';
import './CountryList.css';

const CountryList = ({ countries }) => {
    const [conutryList, setConutryList] = useState([]);

    useEffect(() => {
        setConutryList(countries);
    },[countries]);

    const getConutry = (country) => {
        const newCountryList = [country];
        setConutryList(newCountryList)
    }

  if (conutryList.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (conutryList.length === 1) {
    return <CountryDetail country={conutryList[0]} />;
  }


  return (
    <div>
      {conutryList.map((country) => (
        <div key={country.name.common} className='country-container'>
          <p >{country.name.common}</p>
          <button onClick={() => getConutry(country)}>show</button>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
