function TodoItem ({todoSelect, setViewSelect, active, setActive}){
    return (
      <li >
        <button className="list-item" onClick={()=>{
          setViewSelect(todoSelect);
          setActive(!active);
        }}>
        <span><img src="https://i.postimg.cc/cL5pL4yY/Icon.png"></img></span>
        <p>{todoSelect.text}</p>
        </button>
      </li>
    );
}

export { TodoItem }

