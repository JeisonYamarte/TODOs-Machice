import { TodoSearch } from "./TodoSearch";

function TodoList ({children}){
    return (
      <div className="list-menu-lateral"> 
        <TodoSearch /> 
        <ul className="list-list">
          {children}
        </ul>
      </div>

    );
}

export { TodoList }
