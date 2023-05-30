import './work-info-page.scss';
import Tags from '../tag/tags';
import Work from '../../my-work.json';
import { ReactComponent as LeftArrow } from '../../img/left-arrow.svg';

function WorkInfoPage(props) {
  const pageData = Work.myWorkArray[props.index];
  return (
    <div className='work-page section'>
      <div className='section-content'>
        <h1 className='heading'>{pageData.title}</h1>
        <button className='close-info-page-button' onClick={() => props.handleCardClick(null)}>
          <LeftArrow />
          <p>Back to projects</p>
        </button>
        {pageData.imageFile &&
          <img className='fade-in' src={require(`../../img/${pageData.imageFile}`)} alt="" />
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
          <a href={pageData.githubLink} target='_blank'>{pageData.github}</a>
        </div>
        {
          pageData.website &&
          <div className='info-section'>
          <h2 className='heading-sm'>Website</h2>
          <a href={pageData.websiteLink} target='_blank'>{pageData.website}</a>
          </div>
        }
      </div>
    </div>
  );
}

export default WorkInfoPage;