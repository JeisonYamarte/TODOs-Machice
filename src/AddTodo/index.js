import React from 'react';
import './AddTodo.css'
import { TodoContext } from '../TodoContext';


function AddTodo (){
  const { 
    newTodoActive,
    setNewTodoActive,
   } = React.useContext(TodoContext);
    return (
      <form onClick={(Event)=>{
        Event.preventDefault();
      }} className={`add-container`}>
        <h1 className="add-title">write your new TODO</h1>

        <input className="add-input" placeholder="Tarea" />
        <textarea className="add-input-d" placeholder="Descripcion" />


        <div className="add-buttons">
          <button 
          onClick={()=>{
            setNewTodoActive(!newTodoActive)
          }}
          className="add-button  add-cancel"
          >Cancel</button>
          <button 
          type='submit'
          className="add-button add-anadir"
          >Añadir</button>

        </div>

      </form>
    );
  }


  export { AddTodo }