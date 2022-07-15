import {autorun, extendObservable, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";
import {configure} from "mobx";
import data from './data.json'

class State {
    data = []

    constructor() {
        configure({
            useProxies: "never"
        })
        makeAutoObservable(this, {
            data: observable
        })
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