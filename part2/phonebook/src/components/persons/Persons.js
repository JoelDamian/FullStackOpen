import React, { useState, useEffect } from 'react';
import './Persons.css';

const Persons = ({ persons, filter, handleDeleteNumber }) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const newPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFiltered(newPersons);
  }, [persons, filter]);

  return (
    <div>
      {filtered.map((person) => (
        <div className='container-contact' key={person.id}>
          <p>
            {person.name} {person.number}
          </p>
          <button onClick={() => handleDeleteNumber(person)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
