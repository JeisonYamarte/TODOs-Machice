import React from "react";
import './TodoList.css'
import { TodoSearch } from "./TodoSearch";
import { TodoContext } from '../TodoContext';



function TodoList ({children}){
  const { 
    lateralActive,
  } = React.useContext(TodoContext);
  
    return (
      <div className={`list-menu-lateral ${lateralActive && "list-menu-lateral--active"}`}> 
        <TodoSearch /> 
        <ul className="list-list">
          {children}
        </ul>
      </div>

    );
}

export { TodoList }
