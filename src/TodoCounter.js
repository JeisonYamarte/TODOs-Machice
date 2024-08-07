import './TodoCounter.css';

function TodoCounter ({ total, completed}){
    return (
      <header className='header'>
        <a href=''><span><img className="header-icon" src='https://i.postimg.cc/7LJ31N1c/container.png'></img></span></a>
        <span className='header-text'> TODOs  {completed} / {total}</span>
        <a href=''><span><img className="header-icon" src='https://i.postimg.cc/13GMVSST/trailing-icon.png'></img></span></a>

      </header>
    );
  }

  export { TodoCounter }
