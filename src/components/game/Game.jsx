import React, {useEffect, useState} from 'react';
import './Game.scss';
import CustomButton from "../UI/button/CustomButton";
import CardsList from "../cards_list/CardsList";
import CustomPopup from "../UI/popup/CustomPopup";
import CustomSelect from "../UI/select/CustomSelect";
import CustomInputNumber from "../UI/input_number/CustomInputNumber";


const Game = ({names, setNames}) => {
    const [scores, setScores] = useState(Array(names.length).fill([0]))
    const [round, setRound] = useState(0)
    const [isPopupActive, setIsPopupActive] = useState(false)
    const [lapWinner, setLapWinner] = useState(names[0])
    const [lapWinnerScore, setLapWinnerScore] = useState(1)


    useEffect(() => {
        const updateScores = scores.map(item => [...item])

        if (scores[0].length > 1) {
            updateScores.push(Array(names[0].length).fill([0]))
            setScores(updateScores)
        } else {
            setScores(Array(names.length).fill([0]))
        }
    }, [names])

    useEffect(() => {
        setLapWinner(names[0])
    }, [names])

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
        setIsPopupActive(false)
    }
    return (
        <main className='game'>
            <h1 className='game__title'>Welcome to UNO!</h1>
            <CardsList names={names} setNames={setNames} scores={scores} setScores={setScores}/>
            <CustomButton
                additionalClass='game__button-lap'
                onClick={() => setIsPopupActive(true)}
            >lap</CustomButton>
            {isPopupActive &&
            <CustomPopup isPopupActive={isPopupActive} setIsPopupActive={setIsPopupActive}>
                <h2 className='game__text'>Winner:</h2>
                <CustomSelect
                    options={names}
                    value={lapWinner}
                    onChange={newWinner => setLapWinner(newWinner)}
                />
                <h2 className='game__text'>Score:</h2>
                <CustomInputNumber
                    value={lapWinnerScore}
                    min={1} max={1210}
                    onChange={event => setLapWinnerScore(event.target.value)}
                    placeholder='score...'
                />
                <CustomButton onClick={newLap}>apply</CustomButton>
            </CustomPopup>}
        </main>
    );
};

export default Game;