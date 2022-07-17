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
                {JSON.parse(data).map((data, index) =>
                    <div>
                        {getRandom() >= 0.5 && State.Circle === true ?
                            <div  style={{background: data.color}} id='circle'></div> :
                            State.Square === true ?
                                <div style={{background: data.color}} id='square'></div> :
                                <div style={{background: data.color}} id='circle'></div>}
                    </div>
                )}
            </div>
        );
    }

};

export default observer(ContentBody);