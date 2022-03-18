import React from "react";
import { difficulty } from "../game.component";
import "./header.component.css"

interface HeaderComponentProps {
    showModal(children: React.ReactNode): void;
    difficultyState: difficulty;
    setDifficultyState(difficulty:difficulty): void;
}

const settingsModal = (difficultyState: difficulty) => {
    return <>
        <header className="modal-header">
            <h1>Настройки</h1>
        </header>
        <main className="modal-main">
            <h2>Сложность</h2>
            <div className="settings-difficulty">
                <label>
                    <input type="radio" name="difficulty" id="difficulty" value={ difficulty.easy } checked={ difficultyState === difficulty.easy }/>
                    Легко
                </label>
                <label >
                    <input type="radio" name="difficulty" id="difficulty" value={ difficulty.normal } checked={ difficultyState === difficulty.normal }/>
                    Нормально
                </label>
                <label >
                <input type="radio" name="difficulty" id="difficulty" value={ difficulty.hard } checked={ difficultyState === difficulty.hard}/>
                Сложно
                </label>
            </div>
        </main>
    </>
}

function HeaderComponent(props: HeaderComponentProps) {

    const handleOnClickSettingsBtn = () => {
        props.showModal(settingsModal(props.difficultyState));
    }

    return (
        <header className="game-header">
            <h1 className="game-title">Lamps Game</h1>
            <button className="header-btn" onClick={ handleOnClickSettingsBtn }>Настройки</button>
        </header>  )
}

export default HeaderComponent