import './TodoCounter.css';

function TodoCounter ({ total, completed, setActive, active, addActive, setAddActive}){
    return (
      <header className='header'>
        <button onClick={ () => setActive(!active)}>
        <span><img className="header-icon" src='https://i.postimg.cc/7LJ31N1c/container.png'></img></span></button>
        <span className='header-text'> TODOs  {completed} / {total}</span>
        <button onClick={()=> setAddActive(!addActive)} 
><span><img className="header-icon" src='https://i.postimg.cc/13GMVSST/trailing-icon.png'></img></span></button>

      </header>
    );
  }

  export { TodoCounter }
