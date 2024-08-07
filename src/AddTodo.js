import './AddTodo.css'

function AddTodo (){
    return (
      <div className="add-container">
        <h1 className="add-title">write your new TODO</h1>

        <input className="add-input" placeholder="Comprar una maquina para cortar pelo" />

        <div className="add-buttons">
          <button className="add-button  add-cancel">Cancel</button>
          <button className="add-button add-anadir">Añadir</button>

        </div>

      </div>
    );
  }


  export { AddTodo }