import { SyntheticEvent, useEffect, useState } from "react"
import lampOffImg from "./img/lamp-off.png"
import lampOnImg from "./img/lamp-on.png"
import { LampEntity } from "./lamp.entity"
import "./lamp.component.css"

interface LampComponentProps {
    lamp: LampEntity
    onToggleLamp(): void
}

function LampComponent(props:LampComponentProps) {
    const [lamp, setLamp] = useState<LampEntity>(props.lamp)

    const handleLampOnClick = (e: SyntheticEvent) => {
        e.preventDefault();
        const newLamp: LampEntity = lamp;
        newLamp.toggleLamp();
        setLamp(newLamp);
        props.onToggleLamp();
    }

    useEffect(() => {
        console.log(`lamp is updated. New state is = ${lamp.isOn}`)
    }, []);

    return (
            <span 
            onClick={ handleLampOnClick } 
            className="lamp" 
            style={{
                display: "block",
                background: `no-repeat url(${ lamp.isOn ? lampOnImg : lampOffImg }) 0% 0% / auto 200px`,
                height: "200px",
                width: "134px"
            }}>
            </span>
  )
}

export default LampComponent