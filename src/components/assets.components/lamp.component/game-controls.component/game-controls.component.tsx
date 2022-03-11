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

    handleOnKeyDown(e:React.KeyboardEvent<HTMLDivElement>) {
        e.preventDefault();
        switch(e.key) {
            case "ArrowLeft":
                this.handleClickPrevLamp();
                break;

            case "ArrowRight":
                this.handleClickNextLamp();
                break;
        }
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
        this.setState({answer: +e.target.value});
    }

    render() {
        return (
            <div className="game-controls" >
                <div className="lamps-controls">
                    <span onClick={() => this.handleClickPrevLamp()} className="prevBtn Btn">prev</span>
                    <span onClick={() => this.handleClickNextLamp()} className="nextBtn Btn">next</span>
                </div>
                <span className="text">{this.state.hasWos ? "Вы выиграли!" : "Посчитай сколько здесь лампочек"}</span>
                <div className="answer-form">
                    <input type="text" placeholder="Ответ" onChange={(e) => this.handleAnswerOnChange(e)} className="answerInput"/> 
                    <button onClick={() => this.handleClickAnswer()} className="submitAnswerBtn Btn">Ответ</button>
                </div>
                <span onClick={() => this.handleClickResetLamp()} className="resetBtn">reset</span>
            </div>
          )
    }
}

export default GameControlsComponent