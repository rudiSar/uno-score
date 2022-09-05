import React, {useEffect, useState} from 'react';
import './PlayerCard.scss';


const PlayerCard = ({name, score, playerIndex}) => {
    return (
        <div className='player-card'>
            <header className='player-card__header'>
                <h2 className='player-card__title'>{name || `Player ${playerIndex + 1}`}</h2>
                <p className='player-card__text'>
                    {score
                        ? score.reduce((acc, num) => acc + num, 0)
                        : 0
                    }
                </p>
                <hr className='player-card__separator'/>
            </header>
            <main className='player-card__main'>
                {score.map((item, index) =>
                    <p className='player-card__text' key={index}>{item}</p>
                )}
            </main>
        </div>
    );
};

export default PlayerCard;