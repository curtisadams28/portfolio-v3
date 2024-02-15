import { useState, useEffect } from "react";

import '../../styles/animations.scss';
import './App.scss';

import Navigation from '../Navigation/Navigation';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

// Page Sections
import Hero from '../_sections/Hero/Hero';
import MyWork from '../_sections/MyWork/MyWork';
import Skills from '../_sections/Skills/Skills';
import Contact from '../_sections/Contact/Contact';

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
      <Skills />
      <Contact />
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
