import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
import { TiThMenuOutline } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";




function TodoCounter (){

  const { 
    todosTotal,
    todosCompleted,
    setLateralActive, 
    lateralActive, 
    newTodoActive, 
    setNewTodoActive
  } = React.useContext(TodoContext);

  
  const tituloState = () =>{
    if(todosTotal === 0){
      return 'No hay TODOs'
    } else if(todosTotal === todosCompleted){
      return 'Todos los TODOs estan listos'
    } else{
      return ("TODOs " + todosCompleted + "/" + todosTotal);
    }
  }

  const titulo = tituloState();
    return (
      <header className='header'>
        <button onClick={ () => setLateralActive(!lateralActive)}>
        <TiThMenuOutline className='header-icon' /></button>
        <span className='header-text'> {titulo} </span>
        <button onClick={()=> setNewTodoActive(!newTodoActive)} >
        <FaPlus className='header-icon' /></button>

      </header>
    );
  }

  export { TodoCounter }
