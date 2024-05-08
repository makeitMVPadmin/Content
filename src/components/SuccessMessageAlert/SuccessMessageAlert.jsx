import Button from '../Button/Button';
import './SuccessMessageAlert.scss';
import { FaCheck } from "react-icons/fa";
import successCheckMark from '../../assets/images/successCheckMark.svg';

const SuccessMessageAlert = ({message, children}) => {
    return (
        <div className='successMessage-box'>
            <div className="successMessage-icon">
                <img src={successCheckMark}></img>
            </div>
            {children}
            {message &&
            <div className="successMessage-alert">
                <FaCheck />
                <span className="successMessage-msg">{message}</span>
            </div>
            }
        </div>
        
    )
}


export default SuccessMessageAlert;