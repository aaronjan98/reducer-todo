import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [todoText, setTodoText] = useState([]);
    console.log(state);

    const handleChanges = e => {
        setTodoText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        setTodoText({
            item: '',
          });
    };

    return(
        <form onSubmit={handleSubmit} className='TodoForm'>
            <input type="text"
            name="newTodo"
            value={state.todoText}
            onChange={handleChanges}/>

            <button className='add-btn' onClick={() => dispatch({ type: 'ADD_TODO'})}>Add</button>
        </form>
    );
}

export default TodoForm;