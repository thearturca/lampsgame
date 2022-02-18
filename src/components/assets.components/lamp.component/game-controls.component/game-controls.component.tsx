import React from "react";
import "./game-controls.component.css"

interface GameControlsComponentProps {
    prevLamp(): void;
    nextLamp(): void;
    resetLamps(): void;
    submitAnswer(answer: number): boolean;
}

interface GameControlsComponentStates {
    answer: number;
    hasWos: boolean;
}

class GameControlsComponent extends React.Component<GameControlsComponentProps, GameControlsComponentStates>{
    constructor(props: GameControlsComponentProps) {
        super(props)

        this.state  = {
            answer: 0,
            hasWos: false
        };
    }

    handleClickPrevLamp() {
        this.props.prevLamp();
    }

    handleClickNextLamp() {
        this.props.nextLamp();
    }

    handleClickResetLamp() {
        this.props.resetLamps();
        this.setState({...this.state, hasWos: false})
    }

    handleClickAnswer() {
        if (this.props.submitAnswer(this.state.answer)) this.setState({...this.state, hasWos: true})
    }

    handleAnswerOnChange(e: React.ChangeEvent<HTMLInputElement> ) {
        e.preventDefault();
        this.setState({answer: +e.target.value})
    }

    render() {
        return (
            <>
                <div className="lamps-controls">
                    <span onClick={() => this.handleClickPrevLamp()} className="prev">prev</span>
                    <span onClick={() => this.handleClickNextLamp()} className="next">next</span>
                </div>
                <div className="answer-form">
                    <span onClick={() => this.handleClickResetLamp()}>reset</span>
                    <input type="text" placeholder="Ответ" onChange={(e) => this.handleAnswerOnChange(e)}/> 
                    <button onClick={() => this.handleClickAnswer()}>Ответ</button>
                </div>
                <span>{this.state.hasWos ? "Вы выиграли!" : "Попробуй посчитать сколько здесь всего лампочек!"}</span>
            </>
          )
    }
}

export default GameControlsComponent