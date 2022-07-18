import React, {useEffect, useRef} from 'react';
import s from  './Module.LeftMenu.scss'
import State from "../store/State";
import {observer} from "mobx-react";

const LeftMenu = () => {
    let ChangeCheckBox = (e) => {
        console.log(e.target.value)
        State.LeftMenuCheckboxes(e)
    }

    let showMenu = () => {
        ref.current.style.display = 'inline'
    }
    let ref = useRef()
    const inputChanged = (e) => {
        State.input(e.target.value)
    }
    return (
        <div>
            <input type="checkbox" id="hmt" className="hidden-menu-ticker"/>
            <label className="btn-menu" htmlFor="hmt">
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
            </label>

            <ul onChange={(e) => ChangeCheckBox(e)} className="hidden-menu">
                <li><input id='check' style={{fontSize: '45px'}} value='red' type="checkbox" checked={State.CheckboxOnlyRed} />Красные</li>
                <li><input value='green'  type="checkbox"  checked={State.CheckboxOnlyGreen}/>Зеленые</li>
                <li><input value='blue' type="checkbox"  checked={State.CheckboxOnlyBlue}/>Синие</li>
                <li><input value='yellow' type="checkbox"  checked={State.CheckboxOnlyYellow}/>Желтые</li>
                <div>
                    <li><input name="browser" value='all'  type="radio"/>Все</li>
                    <li><input name="browser" value='dark' type="radio"/>Темные</li>
                    <li><input name="browser" value='light' type="radio"/>Светлые</li>
                </div>
                <li>Колонок<input type="text" onChange={(e) => inputChanged(e)} style={{width: "30px"}}/></li>
            </ul>
        </div>
    );
};

export default observer(LeftMenu);