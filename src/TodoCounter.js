import './TodoCounter.css';

function TodoCounter ({ total, completed, setActive, active}){
    return (
      <header className='header'>
        <button onClick={
          (event)=>{
            console.log("hubo el click para activar la barra lateral")
            console.log(event.target);
            setActive(!active)
          }
        }><span><img className="header-icon" src='https://i.postimg.cc/7LJ31N1c/container.png'></img></span></button>
        <span className='header-text'> TODOs  {completed} / {total}</span>
        <button onClick={
          (event)=>{
            console.log("hubo el click para un nuevo TODO")
            console.log(event.target);
          }
        } 
><span><img className="header-icon" src='https://i.postimg.cc/13GMVSST/trailing-icon.png'></img></span></button>

      </header>
    );
  }

  export { TodoCounter }
