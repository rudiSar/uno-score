import React from 'react';
import './CustomInput.scss';


const CustomInput = ({placeholder, index, names, setNames}) => {
    const nameChangeHandler = (index, event) => {
        setNames([...names.slice(0, index), event.target.value, ...names.slice(index + 1)]);
    }

    return (
        <input
            className='custom-input'
            type="text"
            placeholder={placeholder}
            onChange={event => nameChangeHandler(index, event)}
        />
    );
};

export default CustomInput;