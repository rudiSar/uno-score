import React, {useContext, useEffect} from 'react';
import './Settings.scss';
import {OpenContext} from "../../context/openContext";
import CustomRange from "../UI/range/CustomRange";
import CustomInput from "../UI/input/CustomInput";
import CustomButton from "../UI/button/CustomButton";
import {StartContext} from "../../context/startContext";


const Settings = ({names, setNames, scores, setScores, scoreToWin, setScoreToWin, countOfPlayers, setCountOfPlayers}) => {
    const {isOpen, setIsOpen} = useContext(OpenContext)
    const {isStarted, setIsStarted} = useContext(StartContext)


    const newGame = () => {
        setScores(Array(names.length).fill([0]))
        setIsOpen(false)
        setIsStarted(true)
        fillNames()
    }
    const closeSettingsTab = () => {
        setIsOpen(false)
        fillNames()
    }

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
        const newNames = []
        for (let i = 0; i < countOfPlayers; i++) {
            names[i]
                ? newNames.push(names[i])
                : newNames.push('')
        }
        setNames(newNames)
    }, [countOfPlayers])


    useEffect(() => {
        const updateScores = []

        for (let i = 0; i < names.length; i++) {
            updateScores.push([])
            for (let j = 0; j < scores[0].length; j++) {
                if (scores[i]) {
                    updateScores[i].push(scores[i][j])
                } else {
                    updateScores[i].push(0)
                }
            }
        }

        setScores(updateScores)
    }, [countOfPlayers, names])
    return (
        <div className={containerClass} onClick={closeSettingsTab}>
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
                <CustomButton onClick={newGame}>New Game</CustomButton>
            </aside>
        </div>

);
};

export default Settings;