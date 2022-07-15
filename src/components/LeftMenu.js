import React, {useEffect, useRef} from 'react';
import style from './Module.LeftMenu.scss'
import State from "../store/State";

const LeftMenu = () => {
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

            <ul className="hidden-menu">
                <li><input type="checkbox"/>Красные</li>
                <li><input type="checkbox"/>Зеленые</li>
                <li><input type="checkbox"/>Синие</li>
                <li><input type="checkbox"/>Желтые</li>
                <div>
                    <li><input type="radio"/>Все</li>
                    <li><input type="radio"/>Темные</li>
                    <li><input type="radio"/>Светлые</li>
                </div>
                <li>Колонок<input type="text" onChange={(e) => inputChanged(e)} style={{width: "30px"}}/></li>
            </ul>
        </div>
    );
};

export default LeftMenu;