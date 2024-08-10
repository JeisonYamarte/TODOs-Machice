import './AddTodo.css'

function AddTodo ({addActive}){
    return (
      <div className={`add-container ${addActive && "add-container--active"}`}>
        <h1 className="add-title">write your new TODO</h1>

        <input className="add-input" placeholder="Tarea" />
        <input className="add-input-d" placeholder="Descripcion" />


        <div className="add-buttons">
          <button className="add-button  add-cancel">Cancel</button>
          <button className="add-button add-anadir">Añadir</button>

        </div>

      </div>
    );
  }


  export { AddTodo }