import React, {useContext} from 'react';
import './Settings.scss';
import {OpenContext} from "../../context/openContext";


const Settings = () => {
    const {isOpen, setIsOpen} = useContext(OpenContext)

    const blockClass = isOpen
        ? 'setting__block'
        : 'setting__block setting__block_hide'

    const containerClass = isOpen
        ? 'setting'
        : 'setting setting_hide'

    return (
        <div
            className={containerClass}
            onClick={() => setIsOpen(false)}
        >
            <aside
                className={blockClass}
                onClick={event => event.stopPropagation()}
            >

            </aside>
        </div>

);
};

export default Settings;