import './work-card-grid.scss';
import Card from '../card/card';
import WorkInfoPage from '../work-info-page/work-info-page';
import Work from '../../my-work.json';
import { useState, useEffect } from 'react';

function WorkMenu() {

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
            {Work.myWorkArray.map((item, index) => {
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
      <WorkInfoPage index={workItem} handleCardClick={handleCardClick}/>
    );
  }

}

export default WorkMenu;