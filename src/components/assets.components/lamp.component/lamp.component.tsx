import { SyntheticEvent } from "react"
import lampOffImg from "./img/lamp-off.png"
import lampOnImg from "./img/lamp-on.png"
import { LampEntity } from "./lamp.entity"
import "./lamp.component.css"

interface LampComponentProps {
    lamp: LampEntity
    onToggleLamp(): void
}

function LampComponent(props:LampComponentProps) {

    const handleLampOnClick = (e: SyntheticEvent) => {
        e.preventDefault();
        props.onToggleLamp();
    }

    return (
            <span 
            onClick={ handleLampOnClick } 
            className="lamp" 
            style={{
                display: "block",
                background: `no-repeat url(${ props.lamp.isOn ? lampOnImg : lampOffImg }) 0% 0% / auto 200px`,
                height: "200px",
                width: "134px"
            }}>
            </span>
  )
}

export default LampComponent