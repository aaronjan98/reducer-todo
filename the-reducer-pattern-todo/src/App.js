import React from 'react';
import TodoForm from './components/TodoForm';
import './App.css';
import './components/Todo.css';


function App() {


  return (
    <div className="App">
      <h1>Todo App using the Reducer Pattern!</h1>
      
      <TodoForm  />
    </div>
  );
}

export default App;
