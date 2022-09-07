import React from 'react';
import './CustomButtonCircle.scss'

const CustomButtonCircle = ({children, ...props}) => {
    return (
        <button className='custom-button-circle' {...props}>
            {children}
        </button>
    );
};

export default CustomButtonCircle;