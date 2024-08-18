import './TodoView.css'
import React from 'react';
import { BsCheck } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { TodoContext } from '../TodoContext';



function TodoView (){
    const { 
        completeTodo,
        deleteTodo,
        viewSelect, 
        newTodoActive,
        setNewTodoActive,
    } = React.useContext(TodoContext);

    if (viewSelect != null) {
            return(
                <div className='view-container-true'>
                    <div>
                        <h2 className={`view-title-true ${viewSelect.completed && "view-through"}`}>{viewSelect.text}</h2>
                        <p className={`view-description ${viewSelect.completed && "view-through"}`}>{viewSelect.description}</p>
                    </div>
                    <div className='view-buttons'>
                        <button onClick={completeTodo} className={`view-button-true`}>
                            <BsCheck className={`icon-check ${viewSelect.completed && "icon--active"} `}  />
                        </button>
                        <button onClick={deleteTodo} className='view-button-true view-button--hover'>
                            <BsX className='icon-delete icon--hover'  />
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
                    <button onClick={()=> setNewTodoActive(!newTodoActive)} className="view-button"> Add new TODO</button>
                </div>
            </div>
        )
    }
    
}

export {TodoView}