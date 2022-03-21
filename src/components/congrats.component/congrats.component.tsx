import { NavigateFunction, useNavigate } from "react-router-dom";
import ModalComponent from "../modal.component/modal.component"

interface CongratsComponentProps {
    active: boolean;
    setActive(isActive: boolean): void;
}

function CongratsComponent(props: CongratsComponentProps) {
    const navigate: NavigateFunction = useNavigate();
    const onClose = () => {
        navigate(-1);
        props.setActive(false)
    }
    return (
        <ModalComponent active={props.active} onClose={ onClose }>
            123
        </ModalComponent>
    )
}

export default CongratsComponent