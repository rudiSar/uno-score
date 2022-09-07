import './global_styles/App.scss';
import {useEffect, useState} from "react";
import Game from "./components/game/Game";
import Home from "./components/home/Home";
import {StartContext} from "./context/startContext";
import {OpenContext} from "./context/openContext";
import Settings from "./components/settings/Settings";

function App() {
    const [names, setNames] = useState([])
    const [scores, setScores] = useState(Array(2).fill([0]))

    const [isStarted, setIsStarted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [scoreToWin, setScoreToWin] = useState(500)
    const [countOfPlayers, setCountOfPlayers] = useState(2)

    useEffect(() => { // first initialization
        setScores(Array(2).fill([0]))
    },[])

    return (
      <StartContext.Provider value={{isStarted, setIsStarted}}>
          <OpenContext.Provider value={{isOpen, setIsOpen}}>
              <div className="app">
                  <button className='app__button-open' onClick={() => setIsOpen(true)}>
                      <div className='app__button-open_line'/>
                      <div className='app__button-open_line'/>
                      <div className='app__button-open_line'/>
                  </button>
                  <Settings
                      names={names}
                      setNames={setNames}
                      scores={scores}
                      setScores={setScores}
                      scoreToWin={scoreToWin}
                      setScoreToWin={setScoreToWin}
                      countOfPlayers={countOfPlayers}
                      setCountOfPlayers={setCountOfPlayers}
                  />
                  {isStarted ? <Game
                                  names={names}
                                  setNames={setNames}
                                  scores={scores}
                                  setScores={setScores}
                                  scoreToWin={scoreToWin}
                                  setCountOfPlayers={setCountOfPlayers}
                                />
                                : <Home/>
                  }
              </div>
          </OpenContext.Provider>
      </StartContext.Provider>
);
}

export default App;
