import Navigation from '../Navigation/Navigation';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

import Contact from '../_sections/Contact/ContactSection';
import '../../styles/animations.scss';
import PageContent from '../../data/page-content.json';
import Tags from '../Tags/Tags';

import { useState, useEffect } from "react";

// Page Sections
import Hero from '../_sections/Hero/Hero'
import MyWork from '../_sections/MyWork/MyWork';



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
      <div className='background-img'></div>
      <Navigation linkPosition={linkPosition} pauseHandleScroll={pauseHandleScroll}/>
      <NavigationMobile />
      <Hero />
      <MyWork />
      

      <section id='skills' className='skills section'>
        <div className='section-content'>
          <h1 className='heading'>Skills & Experience</h1>
          <div className='info-section'>
            <p>As a developer who is proficient with both code and design, my strengths lie in creating applications that look great without sacrificing functionality. After 2 years in the industry as a Front-End Developer, I am beginning to expand into Full-Stack development.</p>
          </div>
          <div className='info-section'>
            <h2 className='heading-sm'>Code</h2>
            <Tags tagArray={PageContent.skills.code} />
          </div>
          <div className='info-section'>
            <h2 className='heading-sm'>Tools</h2>
            <Tags tagArray={PageContent.skills.tools} />
          </div>
          <div className='info-section'>
            <h2 className='heading-sm'>Design</h2>
            <Tags tagArray={PageContent.skills.design} />
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
