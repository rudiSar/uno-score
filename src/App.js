import './global_styles/App.scss';
import {useState} from "react";
import Game from "./components/game/Game";
import Home from "./components/home/Home";
import {StartContext} from "./context/startContext";
import {OpenContext} from "./context/openContext";
import Settings from "./components/settings/Settings";

function App() {
    const [isStarted, setIsStarted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


  return (
      <StartContext.Provider value={{isStarted, setIsStarted}}>
          <OpenContext.Provider value={{isOpen, setIsOpen}}>
              <div className="app">
                  <button className='app__button-open' onClick={() => setIsOpen(true)}>
                      <div className='app__button-open_line'/>
                      <div className='app__button-open_line'/>
                      <div className='app__button-open_line'/>
                      </button>
                  <Settings />
                  {isStarted
                      ? <Game />
                      : <Home />
                  }
              </div>
          </OpenContext.Provider>
      </StartContext.Provider>
);
}

export default App;
