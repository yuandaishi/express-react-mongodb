import React from 'react';
import { message } from 'antd';
import { observable, observe, action, toJS } from 'mobx';
import { act } from 'react-dom/test-utils';
import Server from './server';

class State {
    @observable data = [];
    @observable total = 0;
    @observable filter = {};
    @observable current = 1;
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
        this.current = Number(page);
        this.getData({ page: page, pageSize: pageSize, filter: this.filter });
    }
    @action search = <T>(params: T) => {
        this.filter = toJS(params);
        this.current = 1;
        this.getData({ page: 1, pageSize: 10, filter: params });
    }
}

export default new State();