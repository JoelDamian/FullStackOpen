import { useState, useEffect } from "react";
import Filter from "./components/filter/Filter";
import CountryList from "./components/country-list/CountryList";
import axios from "axios";
import './App.css';

function App() {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const initialize = () => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data);
    })
    .catch(error => console.error(error))
  }

  useEffect(initialize, [])

  const handleChangeFilter = (event) => {
    const text = event.target.value;
    const newFilteredData = countries.filter(data => data.name.common.toLowerCase().includes(text.toLowerCase()));
    setFilteredCountries(newFilteredData); 
    setFilter(text);
  }

  return (
    <div className="container">
      <Filter filter={filter} handleChangeFilter={handleChangeFilter}/>
      <CountryList countries={filteredCountries}/>
    </div>
  );
}

export default App;
