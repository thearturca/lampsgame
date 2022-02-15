import { useState } from "react";
import GameControlsComponent from "./assets.components/lamp.component/game-controls.component/game-controls.component"
import { LampEntity } from "./assets.components/lamp.component/lamp.entity";
import LampsContainerComponent from "./lamps-container.component/lamps-container.component"

function GameComponent() {

  const handlePrevLamp = () => {
    if (lampNum <= 0) {
        return setLampNum(lamps.length-1);
    }
    setLampNum(lampNum-1);
  }

  const handleNextLamp = () => {
    if (lampNum >= lamps.length-1) {
        return setLampNum(0);
    }
    setLampNum(lampNum+1);
  }

  const handleResetLamps = () => {
    setLampNum(0);
    return setLamps(generateLamps());
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

  const [lamps, setLamps] = useState<LampEntity[]>(generateLamps());
  const [lampNum, setLampNum] = useState<number>(0);

  return (
    <div className="game">
      <LampsContainerComponent lamps={lamps} currentLamp={lampNum}></LampsContainerComponent>
      <GameControlsComponent prevLamp={handlePrevLamp} nextLamp={handleNextLamp} resetLamps={handleResetLamps}></GameControlsComponent>
    </div>
  )
}

export default GameComponent