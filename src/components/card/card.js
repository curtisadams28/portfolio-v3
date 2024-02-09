import { ReactComponent as Arrow } from '../../img/arrow-right.svg';

import './Card.scss';

function Card(props) {
  return(
    <div className='card' onClick={() => props.handleCardClick(props.index)}>
      <h2>{props.title}</h2>
      <p>{props.info}</p>
      <button>
        More Info
        <Arrow />
      </button>
    </div>
  );
}

export default Card;