import React from 'react';
import Title from '../title/Title';

const Statistics = ({ good, neutral, bad }) => {

    const getAll = () => good + neutral + bad;

    const positivePercentage = () => getAll() === 0 ? 0 : ((good * 100) / getAll());

  const average = () => {
    const totalScore = good - bad;
    return getAll() === 0 ? 0 : (totalScore / getAll());
  };
  return (
    <div>
      <Title text={'statistics'} />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {getAll()}</p>
      <p>average {average()}</p>
      <p>positive {positivePercentage()}%</p>
    </div>
  );
};

export default Statistics;
