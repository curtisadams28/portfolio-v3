import Navigation from './components/navigation/navigation';
import NavigationMobile from './components/navigation-mobile/navigationMobile';
import WorkMenu from './components/work-card-grid/work-card-grid';
import Contact from './components/contact/contact';
import './styles/animations.scss';
import Work from './my-work.json';
import Tags from './components/tag/tags';

import { useState, useEffect } from "react";

import { ReactComponent as Mail } from './img/mail.svg';
import { ReactComponent as Linkedin } from './img/linkedin.svg';
import { ReactComponent as Github } from './img/github.svg';

function App() {

  const [linkPosition, setLinkPosition] = useState(null);
  const [scrollListenerActive, setScrollListenerActive] = useState(true);

  useEffect(() => {
    if (scrollListenerActive) {
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
    }

    // Clean up the event listener when the component unmounts or when scrollListenerActive changes to false
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollListenerActive]);

  return (
    <div className="app">
      <Navigation linkPosition={linkPosition} pauseHandleScroll={pauseHandleScroll}/>
      <NavigationMobile />
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

      <section id='work'>
        <WorkMenu />
      </section>

      <section id='skills' className='skills section'>
        <div className='section-content'>
          <h1 className='heading'>Skills & Experience</h1>
          <div className='info-section'>
            <p>As a developer who is proficient with both code and design, my strengths lie in creating applications that look great without sacrificing functionality. After 2 years in the industry as a Front-End Developer, I am beginning to expand into Full-Stack development.</p>
          </div>
          <div className='info-section'>
            <h2 className='heading-sm'>Code</h2>
            <Tags tagArray={Work.skills.code} />
          </div>
          <div className='info-section'>
            <h2 className='heading-sm'>Tools</h2>
            <Tags tagArray={Work.skills.tools} />
          </div>
          <div className='info-section'>
            <h2 className='heading-sm'>Design</h2>
            <Tags tagArray={Work.skills.design} />
          </div>
        </div>
      </section>

      <section id='contact'>
        <Contact />
      </section>
    </div>
  );

  // Pauses so that clicking a link doesn't trigger changing the link position on scroll.
  function pauseHandleScroll() {
    setScrollListenerActive(false);
    setTimeout(() => {
      setScrollListenerActive(true);
    }, 500);
  }

  function handleScroll() {

    // Select all the navigation links
    const navLinks = document.querySelectorAll('.nav-links-desktop a, .nav-links-mobile a');
    const fromTop = window.scrollY;

    // Iterate through each navigation link
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      // Check if the section is in the viewport
      if (
        section.offsetTop <= fromTop + 400 &&
        section.offsetTop + section.offsetHeight > fromTop + 400
      ) {
        // Add a class to the corresponding navigation link
        link.classList.add('active');

        if (link.offsetLeft != 0) {
          //console.log(link.offsetLeft + (link.offsetWidth / 2));
          setLinkPosition(link.offsetLeft + (link.offsetWidth / 2));
        }


      } else {
        // Remove the class from other navigation links
        link.classList.remove('active');
      }
    });
  }
}

export default App;
