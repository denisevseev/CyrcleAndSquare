import {autorun, extendObservable, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";
import {configure} from "mobx";
import data from './data.json'

class State {
    data = []
    inputColumn = 4
    Square = true
    Circle = true

    constructor() {
        configure({
            useProxies: "never"
        })
        makeAutoObservable(this, {
            data: observable,
            inputColumn: observable,
            Square:observable,
            Circle:observable
        })
    }

    input(data) {
        this.inputColumn = data
    }
    square(data){
        this.Square = data
    }
    circle(data){
        this.Circle = data
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