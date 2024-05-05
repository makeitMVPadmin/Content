import { useState } from 'react';
import './PopUpModal.scss';
import Modal from "react-modal";

// const PopUpModal = ({isOpen, hasCloseBtn=true, onClose, children}) => {
//     // const [isModalOpen, setModalOpen] = useState(isOpen);
//     // const 
//     return (
//         <Modal>
//             {children}
//         </Modal>

//     );
// };

const PopUpStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.85)'
      },
    content: {
        position: 'absolute',
        top: '20%',
        left: '30%',
        right: '30%',
        bottom: '20%',
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

