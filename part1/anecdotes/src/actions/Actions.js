import React from "react";
import './Action.css';

const Actions = ({handleClickRandom, handleClickVote}) => {
    return(
        <div>
            <button onClick={handleClickVote} className='anecdote-button '>vote</button>
            <button onClick={handleClickRandom} className='anecdote-button '>next anecdote</button>
        </div>
    )
};

export default Actions;