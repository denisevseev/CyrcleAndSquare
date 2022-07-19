import React, {useEffect, useRef, useState} from 'react';
import './Module.LeftMenu.scss'
import State from "../store/State";
import {observer} from "mobx-react";

const LeftMenu = () => {
    const [isActive, setActive] = useState(false)
    let ChangeCheckBox = (e) => {
        State.LeftMenuCheckboxes(e)
    }
    let ref = useRef()
    let showMenu = () => {
        ref.current.style.display = 'inline'
    }
    const inputChanged = (e) => {
        setActive(true)
        State.input(e.target.value)
        setTimeout(()=>setActive(false),2000)
    }
    return (
        <div>
            <input type="checkbox" id="hmt" className="hidden-menu-ticker"/>
            <label className="btn-menu" htmlFor="hmt">
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
            </label>

            <div onClick={(e) => ChangeCheckBox(e)} className="hidden-menu">
                <div className="form-check">
                    <input className="form-check-input" id='check'  value='red' type="checkbox"  checked={State.CheckboxOnlyRed} />Красные
                </div>
                <div className="form-check">
                    <input className="form-check-input"  value='green' type="checkbox"  checked={State.CheckboxOnlyGreen} />Зеленые
                </div>
                <div className="form-check" style={{float: 'left', margin: 'auto'}}>
                    <input className="form-check-input"   value='blue' type="checkbox"  checked={State.CheckboxOnlyBlue} />Синие
                </div>
                <div className="form-check">
                    <input className="form-check-input"   value='yellow' type="checkbox"  checked={State.CheckboxOnlyYellow} />Желтые
                </div>
                    <div  className="form-check">
                        <div className='form-check all' >
                            <input className="form-check-input" type="radio" value='all' name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Все
                            </label>
                        </div>
                    </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value='dark' name="flexRadioDefault" id="flexRadioDefault2" />Темные
                </div>
                <div className="form-check">
                    <input className="form-check-input" value='light' type="radio" name="flexRadioDefault" id="flexRadioDefault2" />Светлые
                </div>
                <div className='form-check input'>
                    <span>Колонок</span>
                    <input style={{width: isActive?'3.5em':'' , height: isActive?'3em':''}} onChange={(e)=>inputChanged(e)} className="form-control" type="text" /></div>
            </div>
        </div>
    );
};

export default observer(LeftMenu);