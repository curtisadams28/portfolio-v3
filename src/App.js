import Navigation from './components/navigation/navigation';
import Card from './components/card/card';
import Button from './components/button/button';

import { ReactComponent as Mail } from './img/mail.svg';
import { ReactComponent as Linkedin } from './img/linkedin.svg';
import { ReactComponent as Github } from './img/github.svg';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="hero section">

        <div className='section-content hero-content'>
          <h1 className='hero-heading'>Curtis Adams</h1>
          <p className='hero-subheading'>Front End Developer</p>
        </div>
        <div className='hero-contact'>
          <div className='hero-contact-inner'>
            <div className='social-icons'>
            <div className='vl'></div>
            <a href="#">
                <Mail />
              </a>
              <a href="#">
                <Linkedin />
              </a>
              <a href="#">
                <Github />
              </a>

            </div>
            <div className='email'>
              <div className='vl'></div>
              <p>curtisadams28@gmail.com</p>
            </div>
          </div>

        </div>
        <div className='background-gradient'></div>

      </div>
      <div className='work section'>
        <div className='section-content'>
          <h1 className='heading'>My Work</h1>
          <div className='cards'>
            <Card title='Shift72' info='Video on demand platform for film festivals.'/>
            <Card title='Reroll' info='Recommendations for films and TV.'/>
            <Card title='This Site' info='Portfolio to display my skills and work.'/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
