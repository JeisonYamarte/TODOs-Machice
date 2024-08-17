import React from 'react';
import {TodoView} from '../TodoView'
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { AddTodo } from '../AddTodo';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';

function AppUI (){
  const {
    loading,
    error,
    searchfilter,
    lateralActive,
    newTodoActive,
  } = React.useContext(TodoContext);
    return(
      <>

      <TodoCounter/>

      <TodoView  />
      <span className='app-img'>
        <img src='https://i.postimg.cc/RF6zjXKm/man-with-laptop-pointing-up-removebg-preview.png'></img>
      </span>

      {lateralActive && <TodoList >
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchfilter.lenght == 0) && <EmptyTodos />}
          
        {searchfilter.map(todo => (
          <TodoItem 
            key={todo.text} 
            todoSelect={todo} 
          />
        ))}
      </TodoList>}
      
      {newTodoActive && <Modal>
        <AddTodo />
      </Modal>}
      
    </>

    )
}

export {AppUI}