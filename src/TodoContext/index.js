import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider({children}) {
    
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
    <TodoContext.Provider value={{
        loading,
        error,
        todosCompleted,
        todosTotal,
        lateralActive,
        setLateralActive,
        newTodoActive,
        setNewTodoActive,
        viewSelect,
        setViewSelect,
        searchValue,
        setSearchValue,
        searchfilter,
        deleteTodo,
        completeTodo,
    }}>
        {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}