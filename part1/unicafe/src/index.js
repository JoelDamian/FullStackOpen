import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Action from './components/action/Action';
import Title from './components/title/Title';
import Statistics from './components/statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const actions = [
    {
      text: 'good',
      handleClick: () => setGood(good + 1)
      
    },
    {
      text: 'neutral',
      handleClick: () => setNeutral(neutral + 1)
    },
    {
      text: 'bad',
      handleClick: () => setBad(bad + 1)
    },
  ];

  return (
    <div>
      <Title text={'give feedback'} />
      <Action actions={actions} good={good} neutral={neutral} bad={bad} />
      <Title text={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
