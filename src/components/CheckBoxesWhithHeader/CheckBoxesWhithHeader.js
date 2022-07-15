import React from 'react';
import s from './Module.CheckBoxesWhithHeader.scss'
const CheckBoxesWhithHeader = () => {
    const Handle = (e)=>{
        console.log(e.target.checked)
    }
    return (
        <div style={{display: "flex"}}>
            <div  className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                       Круги
                    </label>
            </div>
            <div className="form-check" onChange={(e)=>Handle(e)}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Квадраты
                    </label>
            </div>
        </div>
    );
};

export default CheckBoxesWhithHeader;