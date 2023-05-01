import './navigation.scss';
import { ReactComponent as Clogo } from '../../img/c-logo.svg';

import Button from '../button/button';

function Navigation() {
  return(
    <nav className='nav'>
      <div className='nav-inner'>
        <Clogo className='c-logo'/>
        <ul className='nav-links'>
            <li>Home</li>
            <li>Work</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
          <Button className='btn btn-nav' text='Resumé'/>
      </div>

        
        
    </nav>
  );
}

export default Navigation;