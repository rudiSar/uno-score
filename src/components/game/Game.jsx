import React, {useEffect, useState} from 'react';
import './Game.scss';
import CustomButton from "../UI/button/CustomButton";
import CardsList from "../cards_list/CardsList";
import CustomPopup from "../UI/popup/CustomPopup";


const Game = ({names, setNames}) => {
    const [scores, setScores] = useState(Array(names.length).fill([0, 100, 200]))
    const [isPopupActive, setIsPopupActive] = useState(false)
    useEffect(() => {
        setScores(Array(names.length).fill([0, 100, 200]))
    }, [names])
    return (
        <main className='game'>
            <h1 className='game__title'>Welcome to UNO!</h1>
            <CardsList names={names} setNames={setNames} scores={scores} setScores={setScores}/>
            <CustomButton
                additionalClass='game__button-lap'
                onClick={() => setIsPopupActive(true)}
            >lap</CustomButton>
            {isPopupActive && <CustomPopup isPopupActive={isPopupActive} setIsPopupActive={setIsPopupActive} />}
        </main>
    );
};

export default Game;