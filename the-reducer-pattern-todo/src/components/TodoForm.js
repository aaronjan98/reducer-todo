import React, { useState, useReducer } from 'react';
import TodoList from './TodoList';
import { initialState, reducer } from '../reducers/reducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState({});
    console.log(state);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return(
        <>
        <form onSubmit={handleSubmit} className='TodoForm'>
            <input type="text"
            name="newTodo"
            value={state.newTodo}
            onChange={handleChanges}
            />

            <button className='add-btn' onClick={() => dispatch({ type: 'ADD_TODO', payload: newTodo})}>Add</button>

            <button className="clear-btn" onClick={() => dispatch({ type: 'CLEAR_TODO'})}>
            Clear Completed
            </button>
        </form>
        <TodoList state={state} dispatch={dispatch}/>
        </>
    );
}

export default TodoForm;