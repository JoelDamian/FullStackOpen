import React from 'react';
import StatisticLine from '../statistic-line/StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  const getAll = () => good + neutral + bad;

  const positivePercentage = () =>
    getAll() === 0 ? 0 : ((good * 100) / getAll()).toFixed(1);

  const average = () => {
    const totalScore = good - bad;
    return getAll() === 0 ? 0 : (totalScore / getAll()).toFixed(1);
  };

  if (getAll() !== 0) {
    return (
      <table>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={getAll()} />
        <StatisticLine text='average' value={average()} />
        <StatisticLine
          text='positive'
          value={positivePercentage().toString() + '%'}
        />
      </table>
    );
  }

  return <p>No feedback given</p>;
};

export default Statistics;
