import { ReactComponent as Arrow } from '../../img/arrow-right.svg';

import './Card.scss';

function Card(props) {
  return(
    <div className='card' onClick={() => props.handleCardClick(props.index)}>
      <div className='card-content'>
        <h2>{props.title}</h2>
        <div className='card-top-text'>
          <p>{props.type}</p>
          <div className='text-divider'></div>
          <p>{props.date}</p>
          
        </div>
        
        <p className='card-info'>{props.info}</p>
        <button className='btn-more-info'>
          More Info
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default Card;