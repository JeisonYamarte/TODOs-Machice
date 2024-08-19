import React from "react";
import './TodoList.css'
import { TodoSearch } from "./TodoSearch";
import { BsXLg } from "react-icons/bs";
import { TodoContext } from "../TodoContext";



function TodoList ({children}){
    const {
      setLateralActive
    } = React.useContext(TodoContext)
  
    return (
      <div className={`list-menu-lateral`}> 
        <TodoSearch /> 
        <ul className="list-list">
          {children}
        </ul>
        <button className="list-close" onClick={() => setLateralActive(false)}>
          <BsXLg className="list-close-icon" />
        </button>
      </div>

    );
}

export { TodoList }
