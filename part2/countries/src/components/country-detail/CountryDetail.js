import React from "react";
import './CountryDetail.css';

const CountryDetail = ({country}) => {

    const keys = Object.keys(country.languages);

    return(<div>
        <h2>{country.name.common}</h2>
        <div className="capital-container">
            capital:{' '}
            {country.capital.map((capital) => (
                <p>{capital}{' '}</p>
            ))}
        </div>
        <p>populaton: {country.population}</p>
        <h3>languages</h3>
        <ul>
            {keys.map((key) => (
                <li>{country.languages[key]}</li>
            ))}
        </ul>
        <img src={country.flags.png} alt="flag"/>
    </div>)
};

export default CountryDetail;