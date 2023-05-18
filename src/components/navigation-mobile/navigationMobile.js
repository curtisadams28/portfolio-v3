import Button from '../button/button';
import './navigationMobile.scss';
import { useState } from "react";

function NavigationMobile() {

  const [toggleActive, setToggleActive] = useState(false);

  function menuToggle() {
    if (!toggleActive) {
      setToggleActive(true);
      document.querySelector('.mobile-nav').classList.remove('closed');
      document.querySelector('.mobile-nav').classList.add('open');
    } else {
      setToggleActive(false);
      document.querySelector('.mobile-nav').classList.remove('open');
      document.querySelector('.mobile-nav').classList.add('closed');
    }
    
  }

  return(
  <nav className='mobile-nav closed'>
    <button className='menu-toggle' onClick={menuToggle}>
      <div className='toggle-line toggle-line-1'></div>
      <div className='toggle-line toggle-line-2'></div>
      <div className='toggle-line toggle-line-3'></div>
    </button>
    <ul className='mobile-nav-links'>
      <li><a href="#home">Home</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <Button className='btn btn-nav btn-resume' text='Resumé'/>
</nav>
  );
}

export default NavigationMobile;