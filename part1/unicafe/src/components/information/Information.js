import React from 'react';

const Information = ({ good, neutral, bad, all }) => {

  const positivePercentage = () => all === 0 ? 0 : ((good * 100) / all);

  const average = () => {
    const totalScore = good - bad;
    return all === 0 ? 0 : (totalScore / all);
  };

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average()}</p>
      <p>positive {positivePercentage()}%</p>
    </div>
  );
};

export default Information;
