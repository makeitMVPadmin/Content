import Button from '../Button/Button';
import './SuccessMessageAlert.scss';
import { FaCheck } from "react-icons/fa";
import successCheckMark from '../../assets/images/successCheckMark.svg';

const SuccessMessageAlert = ({message, redirectPage}) => {
    return (
        <div className='successMessage-Box'>
            <div className="successMessage-alert">
                <FaCheck />
                <span className="successMessage-msg">{message}</span>
            </div>
            <div className="successMessage-icon">
                <img src={successCheckMark}></img>
            </div>
            <Button className="successMessage__close-btn" onClick={redirectPage}>
                Close
            </Button>
        </div>
        
    )
}


export default SuccessMessageAlert;