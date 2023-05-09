import Navigation from './components/navigation/navigation';
import WorkMenu from './components/work-card-grid/work-card-grid';
import './styles/animations.scss';
import Work from './my-work.json';
import Tags from './components/tag/tags';

import { ReactComponent as Mail } from './img/mail.svg';
import { ReactComponent as Linkedin } from './img/linkedin.svg';
import { ReactComponent as Github } from './img/github.svg';

function App() {

  return (
    <div className="app">
      <Navigation />
      <div className="hero">

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

      <WorkMenu />

      <div className='skills section'>
        <div className='section-content'>
          <h1 className='heading'>Skills & Experience</h1>
          <p>Curabitur tristique urna non quam rutrum convallis. Praesent at felis luctus, ultricies metus eu, fringilla nibh. Nunc elementum consequat velit, et rutrum orci. Sed condimentum placerat arcu, et vulputate urna faucibus quis.</p>
          <h2 className='heading-sm'>Code</h2>
          <Tags tagArray={Work.skills.code}/>
          <h2 className='heading-sm'>Tools</h2>
          <Tags tagArray={Work.skills.tools}/>
          <h2 className='heading-sm'>Design</h2>
          <Tags tagArray={Work.skills.design}/>
        </div>
      </div>

    </div>
  );
}

export default App;
