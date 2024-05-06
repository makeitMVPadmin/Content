import Button from '../Button/Button';
import './ErrorMessageAlert.scss';
import { FaTimesCircle  } from "react-icons/fa";
// import errorCheckMark from '../../assets/images/errorCheckMark.svg';

const ErrorMessageAlert = ({message, redirectPage, children}) => {
    return (
        <div className='errorMessage-Box'>
            <div className="errorMessage-alert">
                <FaTimesCircle />
                <span className="errorMessage-msg">{message}</span>
            </div>
            <div className="errorMessage-icon">
                {/* <img src={errorCheckMark}></img> */}
            </div>
            {children}
            {/* <Button className="errorMessage__close-btn" onClick={redirectPage}>
                Close
            </Button> */}
        </div>
        
    )
}


export default ErrorMessageAlert;