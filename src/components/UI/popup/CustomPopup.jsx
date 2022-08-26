import React from 'react';
import './CustomPopup.scss';


const CustomPopup = ({children, isPopupActive, setIsPopupActive}) => {
    return (
        <div className='custom-popup' onClick={() => setIsPopupActive(false)}>
            <div className='custom-popup__content' onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CustomPopup;