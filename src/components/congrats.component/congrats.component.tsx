import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { GET_PARAMS } from "../../consts/router";
import useGetParameter from "../../hooks/useGetParameter";
import ModalComponent from "../modal.component/modal.component"
import "./congrats.component.css"

export interface CongratsComponentProps {
    isOpened: boolean;
}

function CongratsComponent(props: CongratsComponentProps) {

    const lampNum = useGetParameter(GET_PARAMS.lampNum);
    const hasWon = useGetParameter(GET_PARAMS.hasWon);
    const navigate: NavigateFunction = useNavigate();
    
    const onClose = () => {
        navigate(-1);
    }
    
    useEffect(() => {
        if (hasWon !== "true") navigate(-1);
    }, [])

    return (
        <ModalComponent active={ props.isOpened } onClose={ onClose }>
            <header className="modal-header">
                <h1>Победа</h1>
                <button className="btn-close" onClick={ onClose }>X</button>
            </header>
            <main className="modal-main">
                <span>
                    Поздравляем, вам удалось посчитать количество лампочек!
                </span>
                <button className="Btn" onClick={ onClose }>Ура!</button>
            </main>
        </ModalComponent>
    )
}

export default CongratsComponent