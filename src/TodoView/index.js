import './TodoView.css'
import React from 'react';
import { BsCheck } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { TodoContext } from '../TodoContext';
import { TodoQuestion } from '../TodoQuestion';



function TodoView (){
    const { 
        completeTodo,
        deleteTodo,
        viewSelect, 
        newTodoActive,
        setNewTodoActive,
        activeQuestion,
        setActiveQuestion,
    } = React.useContext(TodoContext);

    React.useEffect(()=>{
        setActiveQuestion(false);
    },[viewSelect]);

    if (viewSelect != null) {
            return(
                <div className='view-container-true'>
                    <div className='viw-container-set1'>
                        <h2 className={`view-title-true ${viewSelect.completed && "view-through"}`}>{viewSelect.text}</h2>
                        <div className='view-IAquestion'>
                            {!activeQuestion ?
                            <button onClick={()=> setActiveQuestion(true)} className='view-IAquestion-button'>
                            <BsFillPatchQuestionFill className='view-IAquestion-icon' />
                        </button> :
                            <TodoQuestion />}
                        </div>
                    </div>
                    <div className='view-buttons'>
                        <button onClick={completeTodo} className={`view-button-true`}>
                            <BsCheck className={`icon-check ${viewSelect.completed && "icon--active"}`}  />
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