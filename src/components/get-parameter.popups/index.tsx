import useGetPopupState from "./hooks/useGetPopupState";
import { GET_ENUMS } from "../../consts/router";
import { difficulty } from "../game.component";
import CongratsComponent from "../congrats.component/congrats.component";
import SettingsComponent from "../settings.component/settings.component";

interface GetParameterPopupsProps {
    difficultyState: difficulty;
    setDiffcultyState(difficulty: difficulty):void
}

function GetParameterPopups(props: GetParameterPopupsProps) {
    const { mountedPopup, isOpened } = useGetPopupState();
    switch(mountedPopup) {
        case GET_ENUMS.settings:
            return <SettingsComponent isOpened={ isOpened } difficultyState={ props.difficultyState }  setDifficultyState={ props.setDiffcultyState } />
        case GET_ENUMS.congrats:
            return <CongratsComponent isOpened={ isOpened }/>
        default:
            return <></>
    }
}

export default GetParameterPopups;