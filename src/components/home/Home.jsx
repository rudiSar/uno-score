import React, {useContext} from 'react';
import CustomButton from "../UI/button/CustomButton";
import './Home.scss';
import {OpenContext} from "../../context/openContext";


const Home = () => {
    const {isOpen, setIsOpen} = useContext(OpenContext)

    return (
        <main className='home'>
            <h1 className="home__title">
                <span className='home__title_word-welcome'>Welcome</span><span> </span>
                <span className='home__title_word-to'>to</span><span> </span>
                <span className='home__title_word-uno'>UNO!</span>
            </h1>
            <CustomButton
                additionalClass='home__button'
                onClick={() => setIsOpen(true)}
            >Let's play!</CustomButton>
        </main>
    );
};

export default Home;