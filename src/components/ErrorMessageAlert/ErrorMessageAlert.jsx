import Button from '../Button/Button';
import './ErrorMessageAlert.scss';
import { LiaTimesCircleSolid } from "react-icons/lia";
import errorIcon from '../../assets/images/warning.png';

const ErrorMessageAlert = ({ message, redirectPage, children }) => {
    return (
        <div className='errorMessage-Box'>
            <div className="errorMessage-icon">
                <img width="100px" height="100px" src={errorIcon}></img>
            </div>
            {children}
            <div className="errorMessage-alert">
                <LiaTimesCircleSolid />
                <span className="errorMessage-msg">{message}</span>
            </div>
            
        </div>

    )
}


export default ErrorMessageAlert;