import React from 'react';
import './CustomRange.scss';


const CustomRange = ({value, setValue, range}) => {
    return (
        <input
            className='custom-range'
            type="range"
            value={value}
            onChange={event => setValue(event.target.value)}
            min={range.min} max={range.max}
        />
    );
};

export default CustomRange;