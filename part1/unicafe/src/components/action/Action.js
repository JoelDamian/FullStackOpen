import React from 'react';
import Button from '../button/Button';
import './Action.css';

const Action = ({ actions }) => {
  return (
    <div className='action-container'>
        <Button text={actions[0].text} handleClick={actions[0].handleClick} />
        <Button text={actions[1].text} handleClick={actions[1].handleClick} />
        <Button text={actions[2].text} handleClick={actions[2].handleClick} />
    </div>
  );
};

export default Action;
