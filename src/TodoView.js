import './TodoView.css'
import { BsCheck } from "react-icons/bs";
import { BsX } from "react-icons/bs";

function TodoView (props){
    if (props.todo != null) {
            return(
                <div className='view-container-true'>
                    <div>
                        <h2 className={`view-title-true ${props.todo.completed && "view-through"}`}>{props.todo.text}</h2>
                        <p className={`view-description ${props.todo.completed && "view-through"}`}>{props.todo.description}</p>
                    </div>
                    <div className='view-buttons'>
                        <button onClick={props.onComplete} className={`view-button-true ${props.todo.completed && "view-button--active"}`}>
                            <BsCheck className='icon' />
                        </button>
                        <button onClick={props.onDelete} className='view-button-true view-button--hover'>
                            <BsX className='icon'/>
                        </button>
                </div>
            </div>
        )
    }else{
        return (
            <div className="view-container-false">
                <span><img className="view-img" src="https://i.postimg.cc/YCTQfPXB/Info.png"></img></span>
                <div>
                    <h2 className="view-title"> TODOs</h2>
                    <p className="view-text">There is no TODO</p>
                    <button className="view-button"> Add new TODO</button>
                </div>
            </div>
        )
    }
    
}

export {TodoView}