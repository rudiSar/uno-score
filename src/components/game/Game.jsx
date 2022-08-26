import React from 'react';
import './Game.scss';
import CustomButton from "../UI/button/CustomButton";
import PlayerCard from "../player_card/PlayerCard";


const Game = ({names, setNames}) => {

    return (
        <main className='game'>
            <h1 className='game__title'>Welcome to UNO!</h1>
            {names.map((item, index) =>
                <PlayerCard />
            )}
            <CustomButton additionalClass='game__button-lap'>lap</CustomButton>
        </main>
    );
};

export default Game;