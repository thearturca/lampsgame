import { useCallback, useEffect, useState } from "react";

import GameControlsComponent from "./game-controls.component/game-controls.component"
import { LampEntity } from "./assets.components/lamp.component/lamp.entity";
import LampsContainerComponent from "./lamps-container.component/lamps-container.component";
import HeaderComponent from "./header.component/header.component";
import GetParameterPopups from "./get-parameter.popups";
import "./game.component.css";

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

  const generateLamps = (setDifficulty: difficulty, prevLampLength: number): LampEntity[] => {
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
    let lampsNumber: number = min + Math.floor(Math.random() * (max-min));
    while (lampsNumber === prevLampLength) {

    }
    for(let i=1; i<lampsNumber; i++) {
      const rng = Math.random();
      lamps.push(new LampEntity(rng > 0.5 ? true : false))
    };
    return lamps;
  }

  const [lamps, setLamps] = useState<LampEntity[]>(generateLamps(difficultyState, 0));
  const [lampNum, setLampNum] = useState<number>(0);
  const [isNext, setIsNext] = useState<boolean>(false);

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
    setLamps(generateLamps(difficultyState, lamps.length));
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

  useEffect(()=> {
    handleResetLamps();
  }, [difficultyState])

  useEffect(() => {
    handleUpdateLamp(lampNum)
  }, [lampNum, handleUpdateLamp]);

  useEffect(() => {
    console.log(`ans is ${ lamps.length }`);
  }, [lamps]);

  return (
    <>
    <div className="game">
      <HeaderComponent />
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
       />
    </div>
    <GetParameterPopups difficultyState={ difficultyState } setDiffcultyState={ setDifficultyState }></GetParameterPopups>
    </>
  )
}

export default GameComponent