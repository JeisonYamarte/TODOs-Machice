import React from "react";
import { TodoContext } from '../TodoContext';


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
        <span><img src="https://i.postimg.cc/cL5pL4yY/Icon.png"></img></span>
        <p>{todoSelect.text}</p>
        </button>
      </li>
    );
}

export { TodoItem }

