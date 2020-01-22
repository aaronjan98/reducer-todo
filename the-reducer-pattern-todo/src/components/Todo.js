import React from 'react';

const Todo = props => {

    return (
      <div
        className={props.item.completed ? 'completed' : 'notcompleted'}
        onClick={() => props.dispatch({ type: 'COMPLETE_TODO', payload: props.item})}
      >
        <p>{props.item.todo}</p>
      </div>
    );
  };
  
  export default Todo;