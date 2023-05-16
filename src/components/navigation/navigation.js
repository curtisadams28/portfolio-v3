import './navigation.scss';
import { ReactComponent as Clogo } from '../../img/c-logo.svg';

import Button from '../button/button';

function handleClick(e) {
  e.preventDefault();
  const target = document.querySelector(e.target.hash);
  target.scrollIntoView({ behavior: 'smooth' });
}

function Navigation() {
  return(
    <nav className='nav'>
      <div className='nav-inner'>
        <a className='logo-link' href="./">
          <Clogo className='logo'/>
        </a>
        <ul className='nav-links'>
          <li><a href="#home" onClick={handleClick}>Home</a></li>
          <li><a href="#work" onClick={handleClick}>Work</a></li>
          <li><a href="#skills" onClick={handleClick}>Skills</a></li>
          <li><a href="#contact" onClick={handleClick}>Contact</a></li>
        </ul>
        <Button className='btn btn-nav btn-resume' text='Resumé'/>
      </div>

        
        
    </nav>
  );
}

export default Navigation;