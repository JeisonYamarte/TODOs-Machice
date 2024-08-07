function TodoItem ({ text, completed}){
    return (
      <li className="list-item">
        <span><img src="https://i.postimg.cc/cL5pL4yY/Icon.png"></img></span>
        <p>{text}</p>
      </li>
    );
}

export { TodoItem }

