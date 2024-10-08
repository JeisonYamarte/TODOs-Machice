import React from "react";
import { TodoContext } from '../TodoContext';



function TodoSearch (){
  const { 
    searchValue,
    setSearchValue,
   } = React.useContext(TodoContext);
  return (
    <input className="list-search"
    placeholder="Search" 
    value={searchValue}
    onChange={
      (event)=>{
        setSearchValue(event.target.value);        
      }
    } />
  );
}

  export { TodoSearch }
