import React from 'react';
import './CustomInputNumber.scss';


const CustomInputNumber = ({placeholder, min = 1, max = 100, ...props}) => {
    return (
        <input
            className='custom-input'
            type="number"
            min={min}
            max={max}
            placeholder={placeholder}
            // value={value}
            // onChange={event => setValue(event.target.value)}
            {...props}
        />
    );
};

export default CustomInputNumber;