import './app.css'
import React from 'react';
import {TodoView} from './TodoView'
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';

const defaultTodos = [
  {text :"Cortar carne", description: "debo ir al mercador, ver las carnes que hay, cuales me hacen falta", completed : false},
  {text : "pintar la casa", description: "debo ir al mercador, ver las carnes que hay, cuales me hacen falta", completed: true},
  {text : "comprar agua", description: "debo ir al mercador, ver las carnes que hay, cuales me hacen falta", completed: true},
  {text : "terminar el curso de react", description: "debo ir al mercador, ver las carnes que hay, cuales me hacen falta", completed: false},
  {text : "bañar a los gatos", description: "debo ir al mercador, ver las carnes que hay, cuales me hacen falta", completed: false},
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      
      <TodoView text={defaultTodos[2].text} description={defaultTodos[2].description} completed={defaultTodos[2].completed}/>

      <span className='app-img'>
        <img src='https://i.postimg.cc/RF6zjXKm/man-with-laptop-pointing-up-removebg-preview.png'></img>
      </span>

      <TodoList>
      {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} />
        ))}
      </TodoList>
      

      <AddTodo />
    </>
  );
}



export default App;
