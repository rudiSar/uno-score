import React from 'react';
import './CustomButton.scss';


const CustomButton = ({children, additionalClass, ...props}) => {
    return (
        <button className={`custom-button ${additionalClass}`} {...props}>
            {children}
        </button>
    );
};

export default CustomButton;