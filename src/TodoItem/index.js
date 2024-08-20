import React from "react";
import { TodoContext } from '../TodoContext';
import { BsStars } from "react-icons/bs";


function TodoItem ({todoSelect}){
  const { 
   setViewSelect,
   lateralActive,
   setLateralActive,
  } = React.useContext(TodoContext);

    return (
      <li >
        <button className="list-item" onClick={()=>{
          setViewSelect(todoSelect);
          setLateralActive(!lateralActive);
        }}>
        <span><BsStars className="item-icon" /></span>
        <p className={`${todoSelect.completed && "list-item-true"}`}>{todoSelect.text}</p>
        </button>
      </li>
    );
}

export { TodoItem }

