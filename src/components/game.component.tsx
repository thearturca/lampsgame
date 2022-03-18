import React, { useCallback, useEffect, useState } from "react";
import GameControlsComponent from "./game-controls.component/game-controls.component"
import { LampEntity } from "./assets.components/lamp.component/lamp.entity";
import LampsContainerComponent from "./lamps-container.component/lamps-container.component";
import "./game.component.css";
import ModalComponent from "./modal.component/modal.component";
import HeaderComponent from "./header.component/header.component";

interface GameComponentProps {
  switchTheme(theme: string): void;
}

export enum difficulty {
  easy,
  normal,
  hard
}

function GameComponent(props: GameComponentProps) {
  
  const generateLamps = (min:number, max: number): LampEntity[] => {
    let lamps: LampEntity[] = []; 
    const lampsNumber = min + Math.floor(Math.random() * (max-min));
    for(let i=1; i<lampsNumber; i++) {
      const rng = Math.random();
      lamps.push(new LampEntity(rng > 0.5 ? true : false))
    };
    return lamps;
  }

  
  const [lamps, setLamps] = useState<LampEntity[]>(generateLamps(10, 20));
  const [lampNum, setLampNum] = useState<number>(0);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [difficultyState, setDifficultyState] = useState<difficulty>(difficulty.normal)
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(<></>);

  const handleOnModalClick = () => {
    setModalActive(false);
  };

  const showModal = (children: React.ReactNode) => {
    setModalContent(children);
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
    setLamps(generateLamps(10, 20));
    setLampNum(0);
    handleUpdateLamp(lampNum);
  },[lampNum, handleUpdateLamp])
  
  const handleSubmitAnswer = useCallback((answer: number): boolean => {
    if (answer === lamps.length) { 
      handleResetLamps();
      return true
    };
    return false;
  }, [lamps, handleResetLamps]);

  useEffect(() => {
    handleUpdateLamp(lampNum)
  }, [lampNum, handleUpdateLamp]);
  
  console.log(`ans is ${ lamps.length }`);
  
  return (
    <div className="game">
      <HeaderComponent 
      showModal={ showModal }
      difficultyState={ difficultyState }
      setDifficultyState={ setDifficultyState }
      />
      <LampsContainerComponent isNext={ isNext } lamps={ lamps } currentLamp={ lampNum } onToggleLamp={ handleUpdateLamp }></LampsContainerComponent>
      <GameControlsComponent
       prevLamp={ handlePrevLamp } 
       nextLamp={ handleNextLamp } 
       resetLamps={ handleResetLamps }
       submitAnswer={ handleSubmitAnswer }
       />
       <ModalComponent active={ modalActive } setActive={ handleOnModalClick }>
          { modalContent }
        </ModalComponent>
    </div>
  )
}

export default GameComponent