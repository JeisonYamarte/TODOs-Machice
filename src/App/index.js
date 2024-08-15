import './app.css'
import React from 'react';
import { AppUI } from './appUI';
import { useLocalStorage } from './localStorage';

function App() {
  
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [viewSelect, setViewSelect] = React.useState(null);
  const [lateralActive, setLateralActive] = React.useState(false);
  const [newTodoActive, setNewTodoActive] = React.useState(false);


  const searchfilter = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  const todosCompleted=todos.filter(todo => !!todo.completed).length;
  const todosTotal=todos.length;

  

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
    <AppUI 
    loading={loading}
    error={error}
    todosCompleted={todosCompleted}
    todosTotal={todosTotal}
    lateralActive={lateralActive}
    setLateralActive={setLateralActive}
    newTodoActive={newTodoActive}
    setNewTodoActive={setNewTodoActive}
    viewSelect={viewSelect}
    setViewSelect={setViewSelect}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchfilter={searchfilter}
    deleteTodo={deleteTodo}
    completeTodo={completeTodo}
  
    />
  );
}



export default App;
