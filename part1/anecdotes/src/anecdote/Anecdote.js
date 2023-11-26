import React from "react";

const Anecdote = ({text, vote}) => {
    return(
        <div>
            <p>{text}</p>
            <p>has {vote} votes</p>
        </div>
    )
};

export default Anecdote;