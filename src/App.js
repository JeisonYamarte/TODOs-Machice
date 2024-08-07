import './app.css'
import React from 'react';
import {TodoView} from './TodoView'
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';

const defaultTodos = [
  {text :"Cortar carne", completed : false},
  {text : "pintar la casa", completed: false},
  {text : "comprar agua", completed: false},
  {text : "terminar el curso de react", completed: false},
  {text : "bañar a los gatos", completed: false},
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      
      <TodoView />

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
