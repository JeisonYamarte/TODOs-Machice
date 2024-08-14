import './app.css'
import React from 'react';
import {TodoView} from './TodoView'
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  } else{
    parsedTodos = JSON.parse(localStorageTodos)
  }



  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [viewSelect, setViewSelect] = React.useState(null);
  const [lateralActive, setLateralActive] = React.useState(false);
  const [newTodoActive, setNewTodoActive] = React.useState(false);

  console.log("en el buscador: " + searchValue);

  const searchfilter = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  const todosCompleted=todos.filter(todo => !!todo.completed).length;
  const todosTotal=todos.length;

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));

    setTodos(newTodos);
  }

  const completeTodo = (text) =>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    };

  const deleteTodo = (text) =>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
    setViewSelect(null)
  };
 
  
  return (
    <>

      <TodoCounter 
        completed={todosCompleted} total={todosTotal} 
        active={lateralActive} setActive={setLateralActive}
        addActive={newTodoActive} setAddActive={setNewTodoActive}
      />
      
      <TodoView 
        onComplete={()=>{completeTodo(viewSelect.text)}}
        onDelete={()=>{deleteTodo(viewSelect.text)}}
        todo={viewSelect}/>

      <span className='app-img'>
        <img src='https://i.postimg.cc/RF6zjXKm/man-with-laptop-pointing-up-removebg-preview.png'></img>
      </span>

      <TodoList 
        searchValue={searchValue} setSearchValue={setSearchValue} 
        active={lateralActive}
      >
      {searchfilter.map(todo => (
          <TodoItem 
          key={todo.text} 
          todoSelect={todo} 
          setViewSelect={setViewSelect}
          active={lateralActive} setActive={setLateralActive}/>
        ))}
      </TodoList>
      

      <AddTodo addActive={newTodoActive} />
    </>
  );
}



export default App;
