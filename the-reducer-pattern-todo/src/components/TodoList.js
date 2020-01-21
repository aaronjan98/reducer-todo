import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import Todo from './Todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div className="todo-list">
            {/* {state.initialState.map(item => (
            <Todo key={item.id} item={item} toggleItem={state.toggleItem} />
            ))} */}

            <button className="clear-btn" onClick={state.clearCompleted}>
            Clear Completed
            </button>
        </div>
    );
}

export default TodoList;