import React from 'react';
import Part from '../part/Part';

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part} key={part.id}/>
      ))}
    </div>
  );
};

export default Content;
