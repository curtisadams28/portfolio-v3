import Button from '../button/button';
import './navigationMobile.scss';
import { useState } from "react";

function NavigationMobile() {

  const [toggleActive, setToggleActive] = useState(false);

  function menuToggle() {
    if (!toggleActive) {
      setToggleActive(true);
      document.querySelector('.nav-mobile').classList.remove('closed');
      document.querySelector('.nav-mobile').classList.add('open');
    } else {
      setToggleActive(false);
      document.querySelector('.nav-mobile').classList.remove('open');
      document.querySelector('.nav-mobile').classList.add('closed');
    }
  }

  return(
  <nav className='nav-mobile closed'>
    <button className='menu-toggle' onClick={menuToggle}>
      <div className='toggle-line toggle-line-1'></div>
      <div className='toggle-line toggle-line-2'></div>
      <div className='toggle-line toggle-line-3'></div>
    </button>
    <div className='nav-content'>
      <ul className='nav-links-mobile'>
        <li><a onClick={menuToggle} href="#home">Home</a></li>
        <li><a onClick={menuToggle} href="#work">Work</a></li>
        <li><a onClick={menuToggle} href="#skills">Skills</a></li>
        <li><a onClick={menuToggle} href="#contact">Contact</a></li>
      </ul>
      <Button className='btn btn-nav btn-resume' text='Resumé'/>
    </div>
  </nav>
  );
}

export default NavigationMobile;