import React from 'react';
import Part from '../part/Part';

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
      <strong>
        total of{' '}
        {parts.reduce(
          (accumulator, currentValue) => accumulator + currentValue.exercises,
          0
        )}{' '}
        exercises
      </strong>
    </div>
  );
};

export default Content;
