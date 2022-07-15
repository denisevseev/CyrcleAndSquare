import React from 'react';
import s from './Module.CheckBoxesWhithHeader.scss'
import State from "../../store/State";
const CheckBoxesWhithHeader = () => {
    const HandleSquare = (e)=>{
        State.square(e.target.checked)
    }
    const HandleCircle = (e)=>{
        State.circle(e.target.checked)
    }
    return (
        <div style={{display: "flex"}}>
            <div  className="form-check" onChange={(e)=>HandleCircle(e)}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                       Круги
                    </label>
            </div>
            <div className="form-check" onChange={(e)=>HandleSquare(e)}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Квадраты
                    </label>
            </div>
        </div>
    );
};

export default CheckBoxesWhithHeader;