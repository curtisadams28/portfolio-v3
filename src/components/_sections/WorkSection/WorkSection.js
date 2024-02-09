import './WorkSection.scss';
import Card from '../../Card/Card';
import WorkDetails from '../WorkDetails/WorkDetails';
import PageContent from '../../../data/page-content.json';
import { useState, useEffect } from 'react';

function WorkSection() {

  const [workItem, setWorkItem] = useState(null);

  const handleCardClick = (index) => {
    setWorkItem(index);
  };

  if (workItem === null) {
    return (
      <div className='work section'>
        <div className='section-content'>
          <h1 className='heading'>My Work</h1>
          <div className='cards'>
            {PageContent.myWorkArray.map((item, index) => {
              return(
                <Card
                  key={item.title}
                  index={index}
                  title={item.title}
                  info={item.cardInfo}
                  handleCardClick={handleCardClick}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <WorkDetails index={workItem} handleCardClick={handleCardClick}/>
    );
  }

}

export default WorkSection;