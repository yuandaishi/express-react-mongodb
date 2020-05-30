import React from 'react';
import State from './state';
// import {} from 

interface T {
    name: string
    origin: string,
    buyPrice: number,
    buyWeight: number,
    salePrice: number,
    saleWeight: number,
    income: string,
}

// 可以的话，建议直接继承antd封装的d.ts ColumnProps,这样就不需要自己再写一遍
interface T2 {
    title: string
    dataIndex: string
    index?: string
    render?: <T>(text: any, record: T, index: number) => React.ReactNode;
}
const Data: Array<T> = [
    {
        name: '清远香蕉',
        origin: '清远',
        buyPrice: 5.50,
        buyWeight: 5000,
        salePrice: 7.00,
        saleWeight: 4500,
        income: '未计算',
    },
    {
        name: '海南香蕉',
        origin: '海南',
        buyPrice: 9.50,
        buyWeight: 5000,
        salePrice: 12.00,
        saleWeight: 5000,
        income: '未计算',
    }
]

const Columns: Array<T2> = [
    {
        title: '产品名称',
        dataIndex: 'name',
        index: 'name'
    },
    {
        title: '产地',
        dataIndex: 'origin',
        index: 'origin'
    },
    {
        title: '购入价格(每斤)',
        dataIndex: 'buyPrice',
        index: 'buyPrice'
    },
    {
        title: '购入重量(斤)',
        dataIndex: 'buyWeight',
        index: 'buyWeight'
    },
    {
        title: '卖出价格(每斤)',
        dataIndex: 'salePrice',
        index: 'salePrice'
    },
    {
        title: '卖出重量(斤)',
        dataIndex: 'saleWeight',
        index: 'saleWeight'
    },
    {
        title: '收入',
        dataIndex: 'income',
        index: 'income'
    },
    {
        title: '操作',
        dataIndex: 'operation',
        index: 'index',
        render(text, record, index) {
            return (
                <a onClick={State.modify.bind(null, record, 'banana')}>修改</a>
            )
        },
    }
]

export { Data, Columns }