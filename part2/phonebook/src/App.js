import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/filter/Filter';
import PersonForm from './components/person-form/PersonForm';
import Persons from './components/persons/Persons';
import noteService from './components/services/services';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const initialize = async () => {
      noteService
        .getAllNotes()
        .then((response) => {
          setPersons(response);
        })
        .catch((error) => console.error(error));
    };
    initialize();
  }, []);

  const handleNoteChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const isStringFound = persons.some((obj) => obj.name === newName);
    if (isStringFound) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newContact = {
        name: newName,
        number: newNumber,
      };
      noteService
        .createNotes(newContact)
        .then((response) => {
          setPersons(persons.concat(response));
        })
        .catch((error) => console.error(error));
    }
  };

  const handleDeleteNumber = (person) => {
    const result = window.confirm(`Delete ${person.name}?`);
    if (result) {
      noteService
        .deleteNotes(person.id)
        .then((response) => {
          let newList = persons.filter((element) => element.id !== person.id);
          setPersons(newList);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className='container'>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNoteChange={handleNoteChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filter={filter}
        handleDeleteNumber={handleDeleteNumber}
      />
    </div>
  );
};

export default App;
