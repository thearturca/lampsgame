import { NavigateFunction, useNavigate } from "react-router-dom";
import { difficulty } from "../game.component";
import ModalComponent from "../modal.component/modal.component";
import "./settings.component.css";

export interface SettingsComponentProps {
    active: boolean;
    showModal(): void;
    difficultyState: difficulty;
    setDifficultyState(difficulty: difficulty): void;
}

function SettingsComponent(props: SettingsComponentProps) {
    const navigate: NavigateFunction = useNavigate();
    const onClose = () => {
        navigate(-1);
        props.showModal();
    }
  return (
    <ModalComponent active={props.active} onClose={onClose}>
            <header className="modal-header">
                <h1>Настройки</h1>
                <button className="btn-close" onClick={ onClose }>X</button>
            </header>
            <main className="modal-main">
                <h2>Сложность</h2>
                <div className="settings-difficulty">
                    <label className={props.difficultyState === difficulty.easy ? "active" : ""}>
                        <input 
                        type="radio" 
                        name="difficulty" 
                        id="difficulty" 
                        value={ difficulty.easy } 
                        checked={ props.difficultyState === difficulty.easy } 
                        onChange={ () => props.setDifficultyState(difficulty.easy) }
                    />
                    Легко
                    </label>
                    <label className={props.difficultyState === difficulty.normal ? "active" : ""}>
                        <input 
                        type="radio" 
                        name="difficulty" 
                        id="difficulty" 
                        value={ difficulty.normal } 
                        checked={ props.difficultyState === difficulty.normal } 
                        onChange={ () =>  props.setDifficultyState(difficulty.normal) }
                    />
                    Нормально
                    </label>
                    <label className={props.difficultyState === difficulty.hard ? "active" : ""}>
                    <input 
                        type="radio" 
                        name="difficulty" 
                        id="difficulty" 
                        value={ difficulty.hard } 
                        checked={ props.difficultyState === difficulty.hard} 
                        onChange={ () => props.setDifficultyState(difficulty.hard) }
                    />
                    Сложно
                    </label>
                </div>
            </main>
        </ModalComponent>
  )
}

export default SettingsComponent;