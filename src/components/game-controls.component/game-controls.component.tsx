import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { GET_ENUMS, GET_PARAMS } from "../../consts/router";
import "./game-controls.component.css"

interface GameControlsComponentProps {
    prevLamp(): void;
    nextLamp(): void;
    resetLamps(): void;
    submitAnswer(answer: number): boolean;
}

function GameControlsComponent (props: GameControlsComponentProps){
    
    const navigate: NavigateFunction = useNavigate();
    const [answer, setAnswer] = useState<string>("");
    const [hasWon, setHasWon] = useState<boolean>(false);

    const handleClickPrevLamp = () => {
        props.prevLamp();
    }

    const handleClickNextLamp = () => {
        props.nextLamp();
    }

    const handleClickResetLamp = () => {
        props.resetLamps();
        setAnswer("");
        setHasWon(false);
    }

    const handleClickAnswer = () => {
        if (props.submitAnswer(parseInt(answer))) {
            setHasWon(true);
            navigate(`?${GET_PARAMS.popup}=${GET_ENUMS.congrats}&${GET_PARAMS.lampNum}=${answer}`)
            setAnswer("");
        }
    }

    const handleAnswerOnChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault();
        setAnswer(e.target.value);
    }

    return (
        <div className="game-controls" >
            <div className="lamps-controls">
                <span onClick={ () => handleClickPrevLamp() } className="prevBtn Btn">prev</span>
                <span onClick={ () => handleClickNextLamp() } className="nextBtn Btn">next</span>
            </div>
            <span className="text">{ "Посчитай сколько здесь лампочек" }</span>
            <div className="answer-form">
                <input 
                    type="text" 
                    placeholder="Ответ" 
                    onChange={ (e) => handleAnswerOnChange(e) } 
                    className="answerInput" 
                    value={ answer }/> 
                <button onClick={ () => handleClickAnswer() } className="submitAnswerBtn Btn">Ответ</button>
            </div>
            <span onClick={ () => handleClickResetLamp() } className="resetBtn">reset</span>
        </div>
        )
    }

export default GameControlsComponent