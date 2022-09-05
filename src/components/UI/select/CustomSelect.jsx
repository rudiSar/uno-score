import React from 'react';
import './CustomSelect.scss';


const CustomSelect = ({options, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            className='custom-select'
        >
            {options.map((option, index) =>
                <option key={index} value={option} className='custom-select__item'>{option}</option>
            )}
        </select>
    );
};

export default CustomSelect;