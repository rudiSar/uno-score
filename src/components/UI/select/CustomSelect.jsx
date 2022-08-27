import React from 'react';
import './CustomSelect.scss';


const CustomSelect = ({options, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {options.map((option, index) =>
                <option key={index} value={option}>{option}</option>
            )}
        </select>
    );
};

export default CustomSelect;