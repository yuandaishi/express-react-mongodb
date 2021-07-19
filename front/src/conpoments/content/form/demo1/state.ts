import { observable, action } from 'mobx';
class State {
    @observable data = [
        {
            name: 'yuands',
            age: 30,
            address: '广西'
        }
    ]
    @observable visible = false;
    @action handleOk = () => {
        this.visible = true
    }
    @action handleCancel = () => {
        this.visible = false
    }
}

export default new State();