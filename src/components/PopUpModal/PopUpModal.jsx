import { useState } from 'react';
import './PopUpModal.scss';
import linkedinSignIn_small from '../../assets/images/linkedinSignIn_small.png';
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SuccessMessageAlert from "../../components/SuccessMessageAlert/SuccessMessageAlert";
import Button from '../Button/Button';

// const PopUpModal = ({isSetLoadSpinner, successMessage, signInButton, closeButton}) => {
//     // const [isModalOpen, setModalOpen] = useState(isOpen);
//     // const 
//     return (
//         <div>
//             {isSetLoadSpinner ? (
//                 <Button className="promptpage__signin-linkedin-btn" onClick={signInButton}>
//                     <img src={linkedinSignIn_small}/>
//                 </Button>
//             ):(
//                 successMessage ? (
//                 <SuccessMessageAlert 
//                     message={successMessage}
//                     redirectPage={closeButton}
//                     >
//                 </SuccessMessageAlert>
//                 ):(
//                 <LoadingSpinner></LoadingSpinner>
//                 ) 
//             )}
//         </div>

//     );
// };

const PopUpStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(217, 217, 217, 0.85)'
      },
    content: {
        position: 'absolute',
        top: '20%',
        left: '37%',
        right: '37%',
        bottom: '30%',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '10px',
        outline: 'none',
        padding: '20px'
    }
};

export default PopUpStyle;

