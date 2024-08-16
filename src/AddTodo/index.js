import React from 'react';
import './AddTodo.css'
import { TodoContext } from '../TodoContext';


function AddTodo (){
  const { 
    newTodoActive,
   } = React.useContext(TodoContext);
    return (
      <div className={`add-container ${newTodoActive && "add-container--active"}`}>
        <h1 className="add-title">write your new TODO</h1>

        <input className="add-input" placeholder="Tarea" />
        <input className="add-input-d" placeholder="Descripcion" />


        <div className="add-buttons">
          <button className="add-button  add-cancel">Cancel</button>
          <button className="add-button add-anadir">Añadir</button>

        </div>

      </div>
    );
  }


  export { AddTodo }