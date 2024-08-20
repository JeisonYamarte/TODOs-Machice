import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
import { TiThMenuOutline } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";




function TodoCounter (){
  const { 
    setLateralActive, 
    lateralActive, 
    newTodoActive, 
    setNewTodoActive,
    titulo,
  } = React.useContext(TodoContext);


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
