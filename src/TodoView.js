import './TodoView.css'

function TodoView (){
    return (
        <div className="view-container">
            <span><img className="view-img" src="https://i.postimg.cc/YCTQfPXB/Info.png"></img></span>
            <div>
                <h2 className="view-title"> TODOs</h2>
                <p className="view-text">There is no TODO</p>
                <button className="view-button"> Add new TODO</button>
            </div>
        </div>
    )
}

export {TodoView}