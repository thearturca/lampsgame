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

    const [currentLampState, setCurrentLampState] = useState<boolean>(props.lamps[props.currentLamp].isOn);
    
  return (
    <div className="lamps-container">
        <span className="">Кликай, чтобы вкл/выкл лампочку</span>
        <LampComponent key={props.currentLamp} isOn={props.lamps[props.currentLamp].isOn} onToggleLamp={() => toggleLamp(props.currentLamp)}></LampComponent>
        <span>{props.lamps[props.currentLamp].isOn ? "Лампочка вкл" : "Лампочка Выкл"}</span>
    </div>
  )
}

export default LampsContainerComponent