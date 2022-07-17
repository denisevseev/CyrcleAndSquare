import {autorun, extendObservable, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";
import {configure} from "mobx";
import data from './data.json'

class State {
    data = []
    inputColumn = 4
    Square = true
    Circle = true
    CheckboxOnlyRed = false
    CheckboxOnlyGreen = false
    CheckboxOnlyBlue = false
    CheckboxOnlyYellow = false

    constructor() {
        configure({
            useProxies: "never",
            enforceActions: 'never'
        })
        makeAutoObservable(this, {
            data: observable,
            inputColumn: observable,
            Square: observable,
            Circle: observable,
            CheckboxOnlyRed: observable,
            CheckboxOnlyGreen: observable,
            CheckboxOnlyBlue: observable,
            CheckboxOnlyYellow: observable
        })
    }

    input(data) {
        this.inputColumn = data
    }

    square(data) {
        this.Square = data
    }

    circle(data) {
        this.Circle = data
    }
    LeftMenuCheckboxes(e) {
        let value = e.target.value
        let checked = e.target.checked
        if (value == 'red') this.CheckboxOnlyRed = checked;
        if (value == 'green') this.CheckboxOnlyGreen = checked;
    }


    GetData() {
        axios.get('data.json') //axios работает по http поэтому должен быть поднят сервер отдающий json
            .then(res => {
                this.data = res
            })
            .catch(err => {
                this.data = JSON.stringify(data)
            })
    }
}

export default new State