import React from 'react'
import PageContent from '../../../data/page-content.json';
import Tags from '../../Tags/Tags';
import './Skills.scss';


function Skills() {
  return (
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
  )
}

export default Skills;