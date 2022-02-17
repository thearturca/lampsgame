import { useState } from "react";
import LampComponent from "../assets.components/lamp.component/lamp.component";
import { LampEntity } from "../assets.components/lamp.component/lamp.entity";
import "./lamps-container.component.css"

interface LampsContainerComponentProps {
    lamps: LampEntity[];
    currentLamp: number;
    onToggleLamp(i: number): void;
}

function LampsContainerComponent(props: LampsContainerComponentProps) {

    const toggleLamp = (i: number) => {
        props.lamps[i].toggleLamp();
        setCurrentLampState(props.lamps[i].isOn);
        props.onToggleLamp(props.currentLamp);
    }

    const getPrevLampNum = (num: number): number => {
      if (num <= 0) {
        return props.lamps.length-1;
    }
    return num-1;
    }

    const getNextLampNum = (num: number): number => {
      if (num >= props.lamps.length-1) {
          return 0;
      }
      return num+1;
    }

    const [currentLampState, setCurrentLampState] = useState<boolean>(props.lamps[props.currentLamp].isOn);
    
  return (
    <div className="lamps-container">
        <span className="lamp-hint">Кликай, чтобы вкл/выкл лампочку</span>
          <div className="lamp-wrapper">
            <LampComponent key={getPrevLampNum(props.currentLamp)} isOn={props.lamps[getPrevLampNum(props.currentLamp)].isOn} onToggleLamp={() => toggleLamp(props.currentLamp)}></LampComponent>
            <LampComponent key={props.currentLamp} isOn={props.lamps[props.currentLamp].isOn} onToggleLamp={() => toggleLamp(props.currentLamp)}></LampComponent>
            <LampComponent key={getNextLampNum(props.currentLamp)} isOn={props.lamps[getNextLampNum(props.currentLamp)].isOn} onToggleLamp={() => toggleLamp(props.currentLamp)}></LampComponent>
          </div>
        <span className="lamp-state">{props.lamps[props.currentLamp].isOn ? "Лампочка вкл" : "Лампочка выкл"}</span>
    </div>
  )
}

export default LampsContainerComponent