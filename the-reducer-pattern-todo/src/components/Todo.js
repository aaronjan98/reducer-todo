import React from 'react';

const Todo = props => {
    return (
      <div
        className={props.item.completed ? 'completed' : 'notcompleted'}
        onClick={() => props.toggleItem(props.item.id)}
      >
        <p>{props.item.todo}</p>
        {/* {console.log('from Todo.js', props.item.todo)} */}
      </div>
    );
  };
  
  export default Todo;