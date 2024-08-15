import {TodoView} from '../TodoView'
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { AddTodo } from '../AddTodo';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

function AppUI (
    {
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
    }
){
    return(
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
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchfilter.lenght == 0) && <EmptyTodos />}
      
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

    )
}

export {AppUI}