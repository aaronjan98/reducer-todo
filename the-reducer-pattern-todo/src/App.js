import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {


  return (
    <div className="App">
      <h1>Todo App using the Reducer Pattern!</h1>
      
      <TodoForm  />
      <TodoList  />
    </div>
  );
}

export default App;
