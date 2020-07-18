import { observable } from 'mobx';
class State {
    @observable data = [
        {
            name: 'yuands',
            age: 30,
            address: '广西'
        }
    ]
}

export default new State();