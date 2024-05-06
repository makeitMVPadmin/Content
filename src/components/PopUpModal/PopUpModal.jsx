import './PopUpModal.scss';
import Button from '../Button/Button';


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
        left: '35%',
        right: '35%',
        bottom: '10%',
        width: '500px',
        height: '50%',
        border: 'none',
        // background: 'rgba(100, 100, 100, 1)',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '24px',
        outline: 'none',
        padding: '2%'
        
    }
};

// const handleOpenPostModal = () => {
//     setModalOpen(true);
// };

// const handleClosePostModal = () =>{
//     setModalOpen(false);
// };
const PopUpModal = ({title,closeButtonAction,closeButtonName,children}) => {
    return (
        <div className='modal__box'>
            <div className="modal__title">
                <h4>{title.icon} {title.title}</h4>
            </div>
            <div className="modal__children">
                {children}
            </div>
            <Button className="modal__close-btn" onClick={closeButtonAction}>
                {closeButtonName}
            </Button>
        </div>
    );
};


export { PopUpModal, PopUpStyle };

