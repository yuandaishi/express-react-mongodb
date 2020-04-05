import { action, observable, toJS } from 'mobx'
import Server from './server';
import { act } from 'react-dom/test-utils';

class State{

    @action addFruitsData = async <T>(values:T)=>{//泛型定义箭头函数
        let result = await Server.addFruitsData(values)//获取请求数据
        console.log(result)
    }
}

export default new State()