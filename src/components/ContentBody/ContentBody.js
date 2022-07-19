import React, {useEffect, useRef} from 'react';
import State from "../../store/State";
import {observer} from "mobx-react";
import './Module.ContentBody.scss'

const ContentBody = () => {
    function getRandom() {
        return Math.random();
    }
    const data = State.data
   useEffect(() => {
        State.GetData()
    })
    if (data.length > 0) {
        return (
            <div className='SquareAndCyrcle' style={{gridTemplateColumns: `repeat(${State.inputColumn}, 1fr)`}}>
                {JSON.parse(data).map((data) =>
                    {
                        let dark = State.dark
                        let circle1=  <div style={{background: data.color}} id='circle'></div>
                        let square1 = <div style={{background: data.color}} id='square'></div>
                        let circle2 = dark=='all'? circle1: dark=='light'&&data.dark===true?circle1:dark=='dark'&&!data.dark?circle1:''
                        let square2 = dark=='all'? square1: dark=='light'&&data.dark===true?square1:dark=='dark'&&!data.dark?square1:''

                        if(State.Square&& data.color=='blue'&&State.CheckboxOnlyBlue&&data.form=='square') return square2
                        if(State.Circle&& data.color=='blue'&&State.CheckboxOnlyBlue&&data.form=='circle')  return circle2

                        if(State.Square&& data.color=='yellow'&&State.CheckboxOnlyYellow&&data.form=='square') return square2
                        if(State.Circle&& data.color=='yellow'&&State.CheckboxOnlyYellow&&data.form=='circle') return circle2

                        if(State.Square&& data.color=='green'&&State.CheckboxOnlyGreen&&data.form=='square') return square2
                        if(State.Circle&& data.color=='green'&&State.CheckboxOnlyGreen&&data.form=='circle') return circle2

                        if(State.Square&& data.color=='red'&&State.CheckboxOnlyRed&&data.form=='square') return square2
                        if(State.Circle&& data.color=='red'&&State.CheckboxOnlyRed&&data.form=='circle') return circle2


                    }
                )}
            </div>
        );
    }

};

export default observer(ContentBody);