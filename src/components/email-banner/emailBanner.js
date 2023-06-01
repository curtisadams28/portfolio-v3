import './emailBanner.scss';
import { ReactComponent as CloseButton } from '../../img/x-circle.svg';

function EmailBanner(props) {
  return (
    <div className={`email-banner email-${props.type}`}>
      <p>{props.message}</p>
      <button className='btn-email-close' onClick={props.resetForm}>
        <CloseButton />
      </button>
    </div>
  );
}

export default EmailBanner;