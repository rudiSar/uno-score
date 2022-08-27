import React, {useContext, useEffect, useState} from 'react';
import './Settings.scss';
import {OpenContext} from "../../context/openContext";
import CustomRange from "../UI/range/CustomRange";
import CustomInput from "../UI/input/CustomInput";
import CustomButton from "../UI/button/CustomButton";
import {StartContext} from "../../context/startContext";


const Settings = ({names, setNames}) => {
    const {isOpen, setIsOpen} = useContext(OpenContext)
    const {isStarted, setIsStarted} = useContext(StartContext)

    const [scoreToWin, setScoreToWin] = useState(500)
    const [countOfPlayers, setCountOfPlayers] = useState(2)


    useEffect(() => {
        fillNames()
    }, [countOfPlayers])

    const fillNames = () => {
        const newNames = []
        names.forEach((item, index) => {
            if (item === '') {
                newNames.push(`Player ${index + 1}`)
            } else {
                newNames.push(item)
            }
        })
        setNames(newNames)
    }

    const nameChangeHandler = (index, event) => {
        setNames([...names.slice(0, index), event.target.value, ...names.slice(index + 1)]);
    }

    const blockClass = isOpen
        ? 'setting__block'
        : 'setting__block setting__block_hide'

    const containerClass = isOpen
        ? 'setting'
        : 'setting setting_hide'

    useEffect(() => {
        const newName = []
        for (let i = 0; i < countOfPlayers; i++) {
            names[i]
                ? newName.push(names[i])
                : newName.push('')
        }
        setNames(newName)
    }, [countOfPlayers])
    return (
        <div className={containerClass} onClick={() => setIsOpen(false)}>
            <aside className={blockClass} onClick={event => event.stopPropagation()}>
                <h2 className='setting__title'>Score to win:</h2>
                <CustomRange
                    range={{min: 100, max: 1000}}
                    value={scoreToWin}
                    setValue={setScoreToWin}
                />
                <p className='setting__text'>{scoreToWin}</p>
                <hr className='setting__separator'/>

                <h2 className='setting__title'>Players:</h2>
                <CustomRange
                    range={{min: 2, max: 10}}
                    value={countOfPlayers}
                    setValue={setCountOfPlayers}
                />
                <p className='setting__text'>{countOfPlayers}</p>
                <hr className='setting__separator'/>

                <h2 className='setting__title'>Names:</h2>
                <ul className='setting__list'>
                    {names.map((item, index) =>
                        <li key={index} className='setting__list-item'>
                            <CustomInput
                                placeholder='name'
                                key={index}
                                value={item.value}
                                onChange={event => nameChangeHandler(index, event)}
                            />
                        </li>
                    )}
                </ul>

                <hr className='setting__separator'/>

                <h2 className='setting__title'>Start Game</h2>
                <CustomButton onClick={() => {
                    setIsOpen(false)
                    setIsStarted(true)
                    fillNames()
                }}>GO!</CustomButton>
            </aside>
        </div>

);
};

export default Settings;