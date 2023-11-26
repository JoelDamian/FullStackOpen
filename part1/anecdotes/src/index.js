import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Actions from './actions/Actions';
import Anecdote from './anecdote/Anecdote';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(6));
  const [indexMostVoted, setIndexMostVoted] = useState(0);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClickRandom = () =>
    setSelected(getRandomInt(0, anecdotes.length - 1));

  const handleClickVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    if(indexMostVoted !== selected && copy[selected] > votes[indexMostVoted]){
      setIndexMostVoted(selected)
    }
    setVotes(copy);
  };

  return (
    <div className='container'>
      <h1>Anecdote of day</h1>
      <Anecdote text={props.anecdotes[selected]} vote={votes[selected]} />
      <Actions
        handleClickRandom={handleClickRandom}
        handleClickVote={handleClickVote}
      />
      <h1>Anecdote with most votes</h1>
      <Anecdote text={props.anecdotes[indexMostVoted]} vote={votes[indexMostVoted]} />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
