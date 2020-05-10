import React from 'react';
import {message} from 'antd';
import {observable,observe,action,toJS} from 'mobx';
import { act } from 'react-dom/test-utils';
import Server from './server';

class State{
    @observable data = [];
    @action getData = async <T>(page:T) => {
        let res = await Server.getData(page);
        console.log(res);
        if(res.status === 200){
            this.data = res.data;
        }else{
            //res.data as {msg:string};
            message.info(res.data.msg);
        }
    }
}

export default new State();