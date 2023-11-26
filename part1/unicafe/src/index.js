import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Action from './components/action/Action';
import Information from './components/information/Information';
import Title from './components/title/Title';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const actions = [
    {
      text: 'good',
      handleClick: () => {
        setGood(good + 1);
        setAll(all + 1);
      },
    },
    {
      text: 'neutral',
      handleClick: () => {
        setNeutral(neutral + 1);
        setAll(all + 1);
      },
    },
    {
      text: 'bad',
      handleClick: () => {
        setBad(bad + 1);
        setAll(all + 1);
      },
    },
  ];

  return (
    <div>
      <Title text={'give feedback'} />
      <Action actions={actions} />
      <Title text={'statistics'} />
      <Information good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
