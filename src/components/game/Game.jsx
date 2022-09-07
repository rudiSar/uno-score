import React, {useContext, useEffect, useState} from 'react';
import './Game.scss';
import CustomButton from "../UI/button/CustomButton";
import CardsList from "../cards_list/CardsList";
import CustomPopup from "../UI/popup/CustomPopup";
import CustomSelect from "../UI/select/CustomSelect";
import CustomInputNumber from "../UI/input_number/CustomInputNumber";
import {StartContext} from "../../context/startContext";


const Game = ({names, setNames, scores, setScores, scoreToWin, setCountOfPlayers}) => {
    const [round, setRound] = useState(0)

    const [isLapPopupActive, setIsLapPopupActive] = useState(false)
    const [isWinPopupActive, setIsWinPopupActive] = useState(false)

    const [lapWinner, setLapWinner] = useState(names[0])
    const [lapWinnerScore, setLapWinnerScore] = useState(1)
    const [winner, setWinner] = useState('')

    const {isStarted, setIsStarted} = useContext(StartContext)

    useEffect(() => { // check winner score
        scores.forEach((item, index) => {
            if (item.reduce((acc, num) => acc + num, 0) >= scoreToWin) {
                setWinner(names[index])
                setIsWinPopupActive(true)
            }
        })
    }, [scores])

    const newLap = () => {
        const updateScores = scores.map(item => [...item])

        for (let i = 0; i < names.length; i++) {
            if (round > 0) {
                updateScores[i].push(0)
            }
            updateScores[i][updateScores[i].length - 1] = (names[i] === lapWinner)
                ? Number(lapWinnerScore)
                : 0
        }
        setScores(updateScores)
        setRound(prev => prev + 1)
        setIsLapPopupActive(false)
    }

    const newGame = () => {
        setIsStarted(false)
        setScores(Array(2).fill([0]))
        setRound(0)
        setWinner('')
        setLapWinnerScore(1)
        setLapWinner(names[0])
        setIsWinPopupActive(false)
        setCountOfPlayers(2)
    }

    return (
        <main className='game'>
            <h1 className='game__title'>Welcome to UNO!</h1>
            <CardsList names={names} scores={scores}/>
            <CustomButton
                additionalClass='game__button-lap'
                onClick={() => setIsLapPopupActive(true)}
            >lap</CustomButton>

            {isLapPopupActive &&
                <CustomPopup isPopupActive={isLapPopupActive} setIsPopupActive={setIsLapPopupActive}>
                    <h2 className='game__text'>Winner:</h2>
                    <CustomSelect
                        options={names}
                        value={lapWinner}
                        onChange={newWinner => setLapWinner(newWinner)}
                    />
                    <h2 className='game__text'>Score:</h2>
                    <CustomInputNumber
                        value={lapWinnerScore}
                        setValue={setLapWinnerScore}
                        min={1} max={1210}
                        placeholder='score...'
                    />
                    <CustomButton onClick={newLap}>Apply</CustomButton>
                </CustomPopup>
            }

            {isWinPopupActive &&
                <CustomPopup isPopupActive={isWinPopupActive} setIsPopupActive={setIsWinPopupActive}>
                    <p className='game__text game__text_win'>{winner} WON!</p>
                    <CustomButton onClick={newGame}>New Game</CustomButton>
                </CustomPopup>
            }
        </main>
    );
};

export default Game;