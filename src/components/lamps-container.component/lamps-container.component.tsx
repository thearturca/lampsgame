import LampComponent from "../assets.components/lamp.component/lamp.component";
import { LampEntity } from "../assets.components/lamp.component/lamp.entity";

interface LampsContainerComponentProps {
    lamps: LampEntity[];
    currentLamp: number;
}

function LampsContainerComponent(props: LampsContainerComponentProps) {

    const toggleLamp = (i: number) => {
        props.lamps[i].toggleLamp();
    }
    
  return (
    <div className="lamps-container"
    style={{
        display: "flex",
        justifyContent: "space-around",
        width: "600px",
        height: "400px"
    }}>
        <div>
            Кликай, чтобы вкл/выкл лампочку
            <LampComponent key={props.currentLamp} isOn={props.lamps[props.currentLamp].isOn} onToggleLamp={() => toggleLamp(props.currentLamp)}></LampComponent>
        </div>
    </div>
  )
}

export default LampsContainerComponent