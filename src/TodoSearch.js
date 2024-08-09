import React from "react";

function TodoSearch ({searchValue,setSearchValue}){
  
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
