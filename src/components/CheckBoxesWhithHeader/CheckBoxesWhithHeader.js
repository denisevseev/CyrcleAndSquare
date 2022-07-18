import React from 'react';
import './Module.CheckBoxesWhithHeader.scss'
import State from "../../store/State";
import {observer} from "mobx-react";

const CheckBoxesWhithHeader = () => {
    const HandleSquare = (e) => {
        if (e.target.checked) {
            State.square(true)
        } else {
            State.square(false)
        }
    }
    const HandleCircle = (e) => {
        if (e.target.checked) {
            State.circle(true)
        } else {
            State.circle(false)
        }
    }
    return (
        <div style={{display: "flex"}}>
            <div className="form-check">
                <input onClick={(e) => HandleCircle(e)}
                       className="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                       checked={State.Circle}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Круги
                </label>
            </div>
            <div className="form-check" onChange={(e) => HandleSquare(e)}>
                <input  onClick={(e) => HandleSquare(e)} className="form-check-input" type="checkbox" checked={State.Square}/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Квадраты
                </label>
            </div>
        </div>
    );
};

export default observer(CheckBoxesWhithHeader);