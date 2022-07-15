import {autorun, extendObservable, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";
import {configure} from "mobx";
import data from './data.json'

class State {
    data = []
    inputColumn = 4

    constructor() {
        configure({
            useProxies: "never"
        })
        makeAutoObservable(this, {
            data: observable,
            inputColumn: observable
        })
    }

    input(data) {
        console.log(data)
        this.inputColumn = data
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