import { Link } from "react-router-dom";
import { difficulty } from "../game.component";
import "./header.component.css"

interface HeaderComponentProps {
    showModal(): void;
    difficultyState: difficulty;
    setDifficultyState(difficulty:difficulty): void;
}

function HeaderComponent(props: HeaderComponentProps) {

    const handleOnClickSettingsBtn = () => {

        props.showModal();
    }

    return (
        <header className="game-header">
            <h1 className="game-title">Lamps Game</h1>
            <Link to="/settings">
            <button className="header-btn" onClick={ handleOnClickSettingsBtn }>Настройки</button>
            </Link>
        </header>  )
}

export default HeaderComponent