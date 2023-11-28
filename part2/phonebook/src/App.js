import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/filter/Filter';
import PersonForm from './components/person-form/PersonForm';
import Persons from './components/persons/Persons';
import noteService from './components/services/services';
import Notification from './components/notification/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [sucessMesasge, setSuccessMessage] = useState(null);
  const [notificationColor, setNotificationColor] = useState('');

  useEffect(() => {
    const initialize = async () => {
      noteService
        .getAllNotes()
        .then((response) => {
          setPersons(response);
        })
        .catch((error) => {
          console.error(error);
        });
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
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with the new one?`
      );
      if (result) {
        const foundPerson = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        );
        const newContact = {
          id: foundPerson.id,
          name: foundPerson.name,
          number: newNumber,
        };
        noteService
          .updateNotes(foundPerson.id, newContact)
          .then((response) => {
            const newList = persons.map((person) =>
              person.id === foundPerson.id ? { ...person, ...response } : person
            );
            setPersons(newList);
            setNotificationColor('green')
            setSuccessMessage(`Updated ${foundPerson.name}`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } else {
      const newContact = {
        name: newName,
        number: newNumber,
      };
      noteService
        .createNotes(newContact)
        .then((response) => {
          setPersons(persons.concat(response));
          setNotificationColor('green')
          setSuccessMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch((error) => {
          console.error(error);
        });
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
      <Notification message={sucessMesasge} color={notificationColor}/>
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
