import './navigation.scss';

import Button from '../button/button';

function Navigation() {
  return(
    <nav className='nav'>
        <ul className='nav-links'>
          <li>Home</li>
          <li>Work</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
        <Button className='btn btn-nav' text='Resumé'/>
    </nav>
  );
}

export default Navigation;