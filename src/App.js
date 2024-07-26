import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
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
      <TodoSearch />

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
