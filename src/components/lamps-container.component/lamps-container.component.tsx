import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import LampComponent from "../assets.components/lamp.component/lamp.component";
import { LampEntity } from "../assets.components/lamp.component/lamp.entity";
import "./lamps-container.component.css"

interface LampsContainerComponentProps {
    lamps: LampEntity[];
    currentLamp: number;
    isNext: boolean;
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
        <span className="lamp-hint">Кликай, чтобы вкл/выкл лампочку</span>
          <div className="lamp-wrapper">
            {/* <SwitchTransition> */}
              {/* <CSSTransition key={props.currentLamp} addEndListener={(node, done) => node.addEventListener("transitioned", done, false)} classNames="lamp-left"> */}
                <LampComponent key={props.currentLamp} isOn={props.lamps[props.currentLamp].isOn} onToggleLamp={() => toggleLamp(props.currentLamp)}></LampComponent>
              {/* </CSSTransition> */}
            {/* </SwitchTransition> */}
          </div>
        <span className="lamp-state">{props.lamps[props.currentLamp].isOn ? "Лампочка вкл" : "Лампочка выкл"}</span>
    </div>
  )
}

export default LampsContainerComponent