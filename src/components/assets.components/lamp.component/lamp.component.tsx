import { SyntheticEvent, useState } from "react"
import lampOffImg from "./img/lamp-off.png"
import lampOnImg from "./img/lamp-on.png"
import { LampEntity } from "./lamp.entity"

interface LampComponentProps {
    isOn: boolean;
    onToggleLamp(): void
}

function LampComponent(props:LampComponentProps) {
    const lamp: LampEntity = new LampEntity(props.isOn)

    const handleLampOnClick = (e: SyntheticEvent) => {
        e.preventDefault();
        lamp.toggleLamp();
        setLamp(lamp.isOn);
        props.onToggleLamp()
    }

    const [isLampOn, setLamp] = useState<boolean>(lamp.isOn);
    return (
        <span 
        onClick={handleLampOnClick} 
        className="lamp" 
        style={{
            display: "block",
            background: `no-repeat url(${isLampOn ? lampOnImg : lampOffImg}) 0% 0% / auto 50px`,
            height: "50px",
            width: "30px"
        }}>

        </span>
  )
}

export default LampComponent