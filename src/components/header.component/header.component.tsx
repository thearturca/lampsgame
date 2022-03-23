import { Link } from "react-router-dom";
import { GET_ENUMS, GET_PARAMS } from "../../consts/router";
import "./header.component.css"

function HeaderComponent() {

    return (
        <header className="game-header">
            <h1 className="game-title">Lamps Game</h1>
            <Link to={ `?${GET_PARAMS.popup}=${GET_ENUMS.settings}` }>
            <button className="header-btn">Настройки</button>
            </Link>
        </header>  )
}

export default HeaderComponent