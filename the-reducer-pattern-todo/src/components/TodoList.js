import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    return(
        <div className="todo-list">
            {props.state.map(item => (
            <Todo key={item.id} item={item}  dispatch={props.dispatch}/>
            ))}      
        </div>
    );
}

export default TodoList;