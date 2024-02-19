import './MyWork.scss';
import Card from '../../Card/Card';
import WorkDetails from '../WorkDetails/WorkDetails';
import PageContent from '../../../data/page-content.json';
import { useState } from 'react';

function MyWork() {

  const [workItem, setWorkItem] = useState(null);

  const handleCardClick = (index) => {
    setWorkItem(index);
  };

  if (workItem === null) {
    return (
      <section id='work'>
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
                  type={item.type}
                  date={item.date}
                  info={item.cardInfo}
                  handleCardClick={handleCardClick}
                />
              )
            })}
          </div>
        </div>
      </div>
      </section>

    );
  } else {
    return (
      <WorkDetails index={workItem} handleCardClick={handleCardClick}/>
    );
  }

}

export default MyWork;