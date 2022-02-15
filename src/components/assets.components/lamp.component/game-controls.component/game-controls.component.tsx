import React from "react";

interface GameControlsComponentProps {
    prevLamp(): void;
    nextLamp(): void;
    resetLamps(): void;
}

class GameControlsComponent extends React.Component<GameControlsComponentProps>{
    constructor(props: GameControlsComponentProps) {
        super(props)
    }

    handleClickPrevLamp() {
        this.props.prevLamp();
    }

    handleClickNextLamp() {
        this.props.nextLamp();
    }

    handleClickResetLamp() {
        this.props.resetLamps()
    }

    render() {
        return (
            <>
                <span onClick={() => this.handleClickPrevLamp()}>prev</span>
                <span style={{marginLeft: "10px"}} onClick={() => this.handleClickNextLamp()}>next</span>
                <div>
                    <span onClick={() => this.handleClickResetLamp()}>reset</span>
                    <input type="text" placeholder="Ответ" /> <button>Ответ</button>
                </div>
            </>
          )
    }
}

export default GameControlsComponent