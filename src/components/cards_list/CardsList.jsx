import React from 'react';
import './CardsList.scss';
import PlayerCard from "../player_card/PlayerCard";


const CardsList = ({names, setNames, scores, setScores}) => {
    return (
        <ul className='card-list'>
            {names.map((item, index) =>
                <li key={index} className='card-item'>
                    <PlayerCard name={item} score={scores[index]} playerIndex={index}/>
                </li>
            )}
        </ul>
    );
};

export default CardsList;