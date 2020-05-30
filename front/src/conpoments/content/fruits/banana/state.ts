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
    @observable visible = false;
    @observable operationType = 'add';//操作类型，是新增还是修改
    @observable type = '';//保存的类型
    @observable defaultDate = {};

    @action setType = (type: string) => {
        this.type = type;
    }

    @action setVisible = <T>(visible: boolean, data?: T, form?: any) => {//实在不行，使用any
        this.visible = visible;
        this.defaultDate = data || {};
        form && form.resetFields();
    }
    @action getData = async <T>(page: T) => {
        let res = await Server.getData(page);
        if (res.status === 200) {
            this.data = res.data.data;
            this.total = res.data.total;
            message.success(res.data.msg);
        } else {
            //res.data as {msg:string};
            message.error(res.data.msg);
        }
    }
    @action changePage = <A, B>(page: A, pageSize: B) => {
        this.current = Number(page);
        this.getData({ page: page, pageSize: pageSize, filter: this.filter });
    }
    @action search = <T>(params: any) => {
        for (var key in params) {
            if (params[key] === null || params[key] === '') {
                params[key] = undefined
            }
        }
        this.filter = params;
        this.current = 1;
        this.getData({ page: 1, pageSize: 10, filter: params });
    }
    @action delete = <T>() => {

    }
    @action modify = <T>(record: T, type: string) => {
        this.type = type
        this.operationType = 'modify'
        this.visible = true;
        this.defaultDate = record;
        console.log(toJS(this.defaultDate))
    }
}

export default new State();