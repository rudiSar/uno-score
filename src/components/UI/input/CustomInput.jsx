import React from 'react';
import './CustomInput.scss';


const CustomInput = ({placeholder, ...props}) => {
    return (
        <input
            className='custom-input'
            type="text"
            placeholder={placeholder}
            {...props}
        />
    );
};

export default CustomInput;