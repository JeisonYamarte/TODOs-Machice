import './TodoView.css'

function TodoView (props){
    if (props.text != null) {
            return(
                <div className='view-container-true'>
                    <div>
                        <h2 className={`view-title-true ${props.completed && "view-through"}`}>{props.text}</h2>
                        <p className={`view-description ${props.completed && "view-through"}`}>{props.description}</p>
                    </div>
                    <div className='view-buttons'>
                        <button className={`view-button-true ${props.completed && "view-button--active"}`}>✓</button>
                        <button className='view-button-true view-button--hover'>X</button>
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