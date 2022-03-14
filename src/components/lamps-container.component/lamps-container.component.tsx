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
        <span className="lamp-hint">Кликай, чтобы вкл/выкл лампочку {`# ${props.currentLamp+1}`}</span>
          <div className="lamp-wrapper">
            <SwitchTransition mode="in-out">
              <CSSTransition key={props.currentLamp + (props.isNext ? +1 : -1)} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} classNames={props.isNext ? "lamp-left" : "lamp-right"}>
                <LampComponent key={props.currentLamp} lamp={props.lamps[props.currentLamp]} onToggleLamp={() => toggleLamp(props.currentLamp)}></LampComponent>
              </CSSTransition>
            </SwitchTransition>
          </div>
        <span className="lamp-state">{props.lamps[props.currentLamp].isOn ? "Лампочка вкл" : "Лампочка выкл"}</span>
    </div>
  )
}

export default LampsContainerComponent