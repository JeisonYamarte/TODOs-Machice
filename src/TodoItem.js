function TodoItem ({ text, completed}){
    return (
      <li >
        <button className="list-item">
        <span><img src="https://i.postimg.cc/cL5pL4yY/Icon.png"></img></span>
        <p>{text}</p>
        </button>
      </li>
    );
}

export { TodoItem }

