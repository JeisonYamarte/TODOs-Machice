import { TodoSearch } from "./TodoSearch";
import './TodoList.css'

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
