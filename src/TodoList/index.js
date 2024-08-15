import React from "react";
import { TodoSearch } from "./TodoSearch";
import './TodoList.css'

function TodoList ({children, searchValue, setSearchValue, active}){
  
    return (
      <div className={`list-menu-lateral ${active && "list-menu-lateral--active"}`}> 
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} /> 
        <ul className="list-list">
          {children}
        </ul>
      </div>

    );
}

export { TodoList }
