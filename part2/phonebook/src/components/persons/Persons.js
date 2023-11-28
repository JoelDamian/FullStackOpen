import React, { useState, useEffect } from 'react';

const Persons = ({ persons, filter }) => {
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
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
