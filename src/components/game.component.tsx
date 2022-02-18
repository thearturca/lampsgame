import { useEffect, useState } from "react";
import GameControlsComponent from "./assets.components/lamp.component/game-controls.component/game-controls.component"
import { LampEntity } from "./assets.components/lamp.component/lamp.entity";
import LampsContainerComponent from "./lamps-container.component/lamps-container.component";
import "./game.component.css";

interface GameComponentProps {
  switchTheme(theme: string): void;
}

function GameComponent(props: GameComponentProps) {

  const handlePrevLamp = () => {
    if (lampNum <= 0) {
        return setLampNum(lamps.length-1);
    }
    setLampNum(lampNum-1);
    setIsNext(false);
  }

  const handleNextLamp = () => {
    if (lampNum >= lamps.length-1) {
        return setLampNum(0);
    }
    setLampNum(lampNum+1);
    setIsNext(true);
  }

  const handleResetLamps = () => {
    setLampNum(0);
    return setLamps(generateLamps());
  }

  const handleSubmitAnswer = (answer: number): boolean => {
    if (answer === lamps.length) return true;
    return false;
  }

  const generateLamps = (): LampEntity[] => {
    let lamps: LampEntity[] = []; 
    const lampsNumber = 10 + Math.floor(Math.random() * 10);

    for(let i=1; i<lampsNumber; i++) {
        const rng = Math.random();
        lamps.push(new LampEntity(rng > 0.5 ? true : false))
    }
    
    return lamps;
  }

  const handleUpdateLamp = (i: number) => {
    props.switchTheme(lamps[i].isOn ? "light" : "dark")
  }
  
  const [lamps, setLamps] = useState<LampEntity[]>(generateLamps());
  const [lampNum, setLampNum] = useState<number>(0);
  const [isNext, setIsNext] = useState<boolean>(true)
  
  useEffect(() => {
    handleUpdateLamp(lampNum)
  }, [lampNum]);

  
  console.log(`ans is ${lamps.length}`);

  return (
    <div className="game">
      <h1 className="game-title">Lamp Game</h1>
      <LampsContainerComponent isNext={isNext} lamps={ lamps } currentLamp={ lampNum } onToggleLamp={ handleUpdateLamp }></LampsContainerComponent>
      <GameControlsComponent
       prevLamp={ handlePrevLamp } 
       nextLamp={ handleNextLamp } 
       resetLamps={ handleResetLamps }
       submitAnswer={ handleSubmitAnswer }
       >
       </GameControlsComponent>
    </div>
  )
}

export default GameComponent