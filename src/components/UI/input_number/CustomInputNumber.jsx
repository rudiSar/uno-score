import React, {useEffect, useLayoutEffect} from 'react';
import './CustomInputNumber.scss';


const CustomInputNumber = ({placeholder, min, max, value, setValue}) => {
    useLayoutEffect(() => {
        if (value > max) {
            setValue(max)
        }
    }, [value])

    return (
        <input
            className='custom-input'
            type="number"
            min={min}
            max={max}
            placeholder={placeholder}
            value={value}
            onChange={event => setValue(event.target.value)}
        />
    );
};

export default CustomInputNumber;