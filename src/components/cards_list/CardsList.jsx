import React from 'react';
import './CardsList.scss';
import PlayerCard from "../player_card/PlayerCard";


const CardsList = ({names, scores}) => {
    return (
        <ul className='card-list'>
            {scores.map((item, index) =>
                <li key={index} className='card-item'>
                    <PlayerCard name={names[index]} score={item} playerIndex={index}/>
                </li>
            )}
        </ul>
    );
};

export default CardsList;