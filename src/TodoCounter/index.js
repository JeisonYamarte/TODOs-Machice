import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter (){
  const { 
    todosTotal,
    todosCompleted,
    setLateralActive, 
    lateralActive, 
    newTodoActive, 
    setNewTodoActive
  } = React.useContext(TodoContext);
  const titulo = todosCompleted == todosTotal ? "All TODOs ready" : "TODOs " + todosCompleted + "/" + todosTotal;
    return (
      <header className='header'>
        <button onClick={ () => setLateralActive(!lateralActive)}>
        <span><img className="header-icon" src='https://i.postimg.cc/7LJ31N1c/container.png'></img></span></button>
        <span className='header-text'> {titulo} </span>
        <button onClick={()=> setNewTodoActive(!newTodoActive)} >
        <span><img className="header-icon" src='https://i.postimg.cc/13GMVSST/trailing-icon.png'></img></span></button>

      </header>
    );
  }

  export { TodoCounter }
