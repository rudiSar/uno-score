import React from 'react';
import './CustomInput.scss';


const CustomInput = ({placeholder, ...props}) => {
    return (
        <input
            className='custom-input'
            type="text"
            placeholder={placeholder}
            // value={value}
            // onChange={event => setValue(event.target.value)}
            {...props}
        />
    );
};

export default CustomInput;