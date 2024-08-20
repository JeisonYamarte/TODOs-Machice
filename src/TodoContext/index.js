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



  const [titulo, setTitulo] = React.useState('')
  const [searchValue, setSearchValue] = React.useState('');
  const [viewSelect, setViewSelect] = React.useState(null);
  const [lateralActive, setLateralActive] = React.useState(false);
  const [newTodoActive, setNewTodoActive] = React.useState(false);


  const searchfilter = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));
  const todosCompleted=todos.filter(todo => !!todo.completed).length;
  const todosTotal=todos.length;
  

  const aggTodo = (todo) => {
   const validar = todos.some(todoItem => todoItem.text === todo.text);
    console.log(validar);
     
   if(!validar){
    const newTodos = [...todos]
    const temp ={
      text: todo.text,
      description: todo.description,
      completed: false,
    }
    newTodos.push(temp);
    setViewSelect(temp)
    
    saveTodos(newTodos);
  }else{
    setViewSelect(todos.find(todoItem => todoItem.text === todo.text));
  }
  }


  React.useEffect(()=>{
    let temp;
    if(todosTotal === 0){
      temp = 'No hay TODOs'
    } else if(todosTotal === todosCompleted){
      temp = 'Todos los TODOs estan listos'
    } else{
      temp = "TODOs " + todosCompleted + "/" + todosTotal;
    }
    setTitulo(temp);
  },[todosCompleted,todosTotal])
  

  const completeTodo = () =>{
    let newTodos = [...todos]
   
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === viewSelect.text
    );
  
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);
    
  };

  const deleteTodo = () =>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == viewSelect.text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
    if (todos.length > 0){
      setViewSelect(todos[0]);
    } else{
      setViewSelect(null)
    }
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
        aggTodo,
        titulo,
    }}>
        {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}