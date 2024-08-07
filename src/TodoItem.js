function TodoItem ({ text, completed}){
    return (
      <li className="list-item">
        <span>V</span>
        <p>{text}</p>
      </li>
    );
}

export { TodoItem }

