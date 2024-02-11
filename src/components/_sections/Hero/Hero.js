import { ReactComponent as Mail } from '../../../img/mail.svg';
import { ReactComponent as Linkedin } from '../../../img/linkedin.svg';
import { ReactComponent as Github } from '../../../img/github.svg';

import './Hero.scss';

function Hero() {
  return(
    <section id='home' className="hero">
    <div className='section-content hero-content'>
      <h1 className='hero-heading'>Curtis Adams</h1>
      <p className='hero-subheading'>Front End Developer</p>
    </div>
    <div className='hero-contact'>
      <div className='hero-contact-inner'>
        <div className='social-icons'>
          <div className='vl'></div>
          <a href="mailto:curtisadams28@gmail.com" target='_blank'>
            <Mail />
          </a>
          <a href="https://linkedin.com/in/curtis-dev" target='_blank'>
            <Linkedin />
          </a>
          <a href="https://github.com/curtisadams28" target='_blank'>
            <Github />
          </a>

        </div>
        <div className='email'>
          <div className='vl'></div>
          <p>curtisadams28@gmail.com</p>
        </div>
      </div>

    </div>
    
  </section>
  );
}


export default Hero;