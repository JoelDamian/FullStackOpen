import React from "react";
import CountryDetail from "../country-detail/CountryDetail";

const CountryList = ({countries}) => {

    if(countries.length > 10){
        return <p>Too many matches, specify another filter</p>
    }

    if(countries.length === 1){
        return <CountryDetail country={countries[0]}/>
    }
    
    return(<div>
        {countries.map((country) => (
            <p key={country.name.common}>{country.name.common}</p>
        ))}
    </div>)
};

export default CountryList;