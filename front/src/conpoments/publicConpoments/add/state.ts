import { action, observable, toJS } from 'mobx'
import Server from './server';
import { message } from 'antd';

class State {

    @action addFruitsData = async <T>(values: T, type: string) => {//泛型定义箭头函数
        if (type === 'add') {//新增
            let result = await Server.addFruitsData(values)//获取请求数据
            message.success(result.data.msg);
        } else if (type === 'modify') { //更新
            let result = await Server.modifyFruitsData(values)
            message.success(result.data.msg);
        }
    }
}

export default new State()