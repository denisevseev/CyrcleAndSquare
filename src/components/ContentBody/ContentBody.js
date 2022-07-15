import React, {useEffect} from 'react';
import State from "../../store/State";
import {observer} from "mobx-react";
import './Module.ContentBody.scss'

const ContentBody = () => {
    const data = State.data
    useEffect(() => {
        State.GetData()
    })
    if (data.length > 0) {
        return (
            <div>
                {JSON.parse(data).map((data) =>
                    <div className='SquareAndCyrcle'>
                        <div style={{background: data.color}} id='circle'></div>
                        <div style={{background: data.color}} id='square'></div>
                    </div>
                )}
            </div>
        );
    }

};

export default observer(ContentBody);