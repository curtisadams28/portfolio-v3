import './WorkDetails.scss';
import Tags from '../../Tags/Tags';
import PageContent from '../../../data/page-content.json';
import React, { useState } from "react";
import { ReactComponent as LeftArrow } from '../../../img/left-arrow.svg';



function WorkInfoPage(props) {

  const [imageLoaded, setImageLoaded] = useState(false);

  const pageData = PageContent.myWorkArray[props.index];
  return (
    <section id='work'>
      <div className='work-page section'>
        <div className='section-content'>
          <h1 className='heading'>{pageData.title}</h1>
          <button className='close-info-page-button' onClick={() => props.handleCardClick(null)}>
            <LeftArrow />
            <p>Back to projects</p>
          </button>
          {pageData.imageFile &&
            <img
              className={`img-fade-in ${imageLoaded ? "img-loaded" : ""}`}
              src={require(`../../../img/${pageData.imageFile}`)}
              alt=""
              onLoad={() => setImageLoaded(true)}
            />
          }
          <div className='info-section'>
            <h2 className='heading-sm'>About</h2>
            <p>{pageData.about}</p>
          </div>
          <div className='info-section'>
            <h2 className='heading-sm'>Technologies</h2>
            <Tags tagArray={pageData.technologies} />
          </div>
          <div className='info-section'>
            <h2 className='heading-sm'>Github</h2>
            <a href={pageData.githubLink} target='_blank' rel='noreferrer'>{pageData.github}</a>
          </div>
          {
            pageData.website &&
            <div className='info-section'>
            <h2 className='heading-sm'>Website</h2>
            <a href={pageData.websiteLink} target='_blank' rel='noreferrer'>{pageData.website}</a>
            </div>
          }
        </div>
      </div>
    </section>
  );
}

export default WorkInfoPage;