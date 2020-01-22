import React, { useReducer, useState} from 'react';
import { initialState, reducer } from '../reducers/reducer';
import Todo from './Todo';

const TodoList = props => {
    const [newTodo, setNewTodo] = useState({});

    const toggleItem = id => {
        const newTodoDataList = props.state.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        });
        setNewTodo(
         newTodoDataList
        );
        console.log('from TodoList', newTodoDataList);

      };

    return(
        <div className="todo-list">
            {props.state.map(item => (
            <Todo key={item.id} item={item} toggleItem={toggleItem} />
            ))}
            
        </div>
    );
}

export default TodoList;