import React from 'react';
import './AddTodo.css'
import { TodoContext } from '../TodoContext';


function AddTodo (){
  const { 
    aggTodo,
    setNewTodoActive,
   } = React.useContext(TodoContext);
   const [todo, setTodo] = React.useState({text: '', descrption: ''})

   const onSubmit = (event) =>{
      event.preventDefault();
      aggTodo(todo);
      setNewTodoActive(false);
   }

   const onChangeD = (event) =>{
    setTodo({text: todo.text, description: event.target.value});
   }

   const onChangeT = (event) =>{
    setTodo({text: event.target.value, description: todo.descrption});
   }


    return (
      <form onSubmit={onSubmit} className={`add-container`}>
        <h1 className="add-title">Escribe el nuevo TODO</h1>

        <input 
          value={todo.text} 
          onChange={onChangeT}
          className="add-input" 
          placeholder="Tarea" />
        <textarea 
          value={todo.descrption} 
          onChange={onChangeD}
          className="add-input-d" 
          placeholder="Descripcion" />


        <div className="add-buttons">
          <button 
          onClick={()=>{
            setNewTodoActive(false)
          }}
          className="add-button  add-cancel"
          >Cancelar</button>
          <button 
          type='submit'
          className="add-button add-anadir"
          >Añadir</button>

        </div>

      </form>
    );
  }


  export { AddTodo }