import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import GameControlsComponent from "./game-controls.component/game-controls.component"
import { LampEntity } from "./assets.components/lamp.component/lamp.entity";
import LampsContainerComponent from "./lamps-container.component/lamps-container.component";
import HeaderComponent from "./header.component/header.component";
import SettingsComponent from "./settings.component/settings.component";
import "./game.component.css";
import CongratsComponent from "./congrats.component/congrats.component";

interface GameComponentProps {
  switchTheme(theme: string): void;
}

export enum difficulty {
  easy,
  normal,
  hard
}

function GameComponent(props: GameComponentProps) {
    
  const [difficultyState, setDifficultyState] = useState<difficulty>(difficulty.normal);
  const [modalActive, setModalActive] = useState<boolean>(false);

  const generateLamps = (setDifficulty: difficulty): LampEntity[] => {
    let min: number = 0;
    let max: number = 1;
    switch(setDifficulty) {
      case(difficulty.easy):
        min = 7;
        max = 15;  
      break;
      case(difficulty.normal):
        min = 12;
        max = 20;  
      break;
      case(difficulty.hard):
        min = 20;
        max = 45;  
      break;
      default:
        min = 12;
        max = 20;
        break;
    }
    let lamps: LampEntity[] = []; 
    const lampsNumber = min + Math.floor(Math.random() * (max-min));
    for(let i=1; i<lampsNumber; i++) {
      const rng = Math.random();
      lamps.push(new LampEntity(rng > 0.5 ? true : false))
    };
    return lamps;
  }

  const [lamps, setLamps] = useState<LampEntity[]>(generateLamps(difficultyState));
  const [lampNum, setLampNum] = useState<number>(0);
  const [isNext, setIsNext] = useState<boolean>(false);

  const handleOnModalClick = () => {
    setModalActive(false);
  };

  const showModal = () => {
    setModalActive(true);
  }
  
  const handleUpdateLamp = useCallback((i: number) => {
    props.switchTheme(lamps[i].isOn ? "light" : "dark")
  }, [lamps, props]);
  
  const handlePrevLamp = useCallback(() => {
    setIsNext(false);
    if (lampNum <= 0) {
      return setLampNum(lamps.length-1);
    }
    setLampNum(lampNum-1);
  }, [lampNum, lamps]);
  
  const handleNextLamp = useCallback(() => {
    setIsNext(true);
    if (lampNum >= lamps.length-1) {
      return setLampNum(0);
    }
    setLampNum(lampNum+1);
  }, [lampNum, lamps]);
  
  
  const handleResetLamps = useCallback(() => {
    setLamps(generateLamps(difficultyState));
    setLampNum(0);
    handleUpdateLamp(lampNum);
  },[lampNum, handleUpdateLamp, difficultyState])
  
  const handleSubmitAnswer = useCallback((answer: number): boolean => {
    if (answer === lamps.length) { 
      handleResetLamps();
      return true
    };
    return false;
  }, [lamps, handleResetLamps]);

  const handleChangeDifficulty = useCallback((difficulty: difficulty): void => {
    setDifficultyState(difficulty);
    handleResetLamps();
  }, [handleResetLamps]);

  useEffect(() => {
    handleUpdateLamp(lampNum)
  }, [lampNum, handleUpdateLamp]);

  useEffect(() => {
    console.log(`ans is ${ lamps.length }`);
  }, [lamps]);

  return (
    <>
    <div className="game">
      <HeaderComponent 
        difficultyState={ difficultyState }
        showModal={ showModal }
      />
      <LampsContainerComponent 
        isNext={ isNext } 
        lamps={ lamps } 
        currentLamp={ lampNum } 
        onToggleLamp={ handleUpdateLamp }
      />
      <GameControlsComponent
        prevLamp={ handlePrevLamp } 
        nextLamp={ handleNextLamp } 
        resetLamps={ handleResetLamps }
        submitAnswer={ handleSubmitAnswer }
        showModal = { showModal }
       />
    </div>
    <Routes>
      <Route 
        path="settings" 
        element={
          <SettingsComponent 
            active={modalActive} 
            showModal={ handleOnModalClick }  
            difficultyState={ difficultyState } 
            setDifficultyState={ handleChangeDifficulty }
            />
          }
      />
      <Route 
        path="congrats"
        element={
            <CongratsComponent 
              active={ modalActive } 
              setActive={ setModalActive }
            />
        } 
      />
    </Routes>
    </>

  )
}

export default GameComponent