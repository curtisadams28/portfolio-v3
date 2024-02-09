import './Navigation.scss';
import { ReactComponent as Clogo } from '../../img/c-logo.svg';

import { useState, useEffect } from "react";

function Navigation(props) {

  const [linkPosition, setLinkPosition] = useState(null);



  useEffect(() => {
    if (props.linkPosition != null) {
      setLinkPosition(props.linkPosition);
    }

  }, [props.linkPosition]);

  const handleClick = (e) => {
    e.preventDefault();
  
    // Scrolls to the section clicked by the user.
    const target = document.querySelector(e.target.hash);
    target.scrollIntoView({ behavior: 'smooth' });
    const position = e.target.offsetLeft + (e.target.offsetWidth / 2);
    setLinkPosition(position);  
    props.pauseHandleScroll();
  }

  return(
    <nav className='nav-desktop'>
      <div className='nav-inner'>
        <a className='logo-link' href="./">
          <Clogo className='logo'/>
        </a>
        <ul className='nav-links-desktop'>
          <li><a href="#home" onClick={handleClick}>Home</a></li>
          <li><a href="#work" onClick={handleClick}>Work</a></li>
          <li><a href="#skills" onClick={handleClick}>Skills</a></li>
          <li><a href="#contact" onClick={handleClick}>Contact</a></li>
          <div className='nav-line' style={{ left: `${linkPosition}px` }}></div>
        </ul>
        <a href="/Curtis Adams - Resumé.pdf" target="_blank" rel="noopener noreferrer" className='btn btn-resume btn-resume-desktop'>Resumé</a>
      </div>
    </nav>
  );
}

// Remove the event listener for scrolling here. Add it again after 0.5s.


export default Navigation;