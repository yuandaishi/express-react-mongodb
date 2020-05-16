import React from 'react';
import { message } from 'antd';
import { observable, observe, action, toJS } from 'mobx';
import { act } from 'react-dom/test-utils';
import Server from './server';

class State {
    @observable data = [];
    @observable total = 0;
    @action getData = async <T>(page: T) => {
        let res = await Server.getData(page);
        if (res.status === 200) {
            this.data = res.data.data;
            this.total = res.data.total;
        } else {
            //res.data as {msg:string};
            message.info(res.data.msg);
        }
    }
    @action changePage = <A, B>(page: A, pageSize: B) => {
        console.log(page, pageSize);
        this.getData({ page: page, pageSize: pageSize });
    }
}

export default new State();