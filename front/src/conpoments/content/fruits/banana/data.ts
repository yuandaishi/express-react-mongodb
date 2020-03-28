interface T{
    name:string
    origin:string,
    buyPrice:number,
    buyWeight:number,
    salePrice:number,
    saleWeight:number,
    income:string,
}

interface T2{
    title:string
    dataIndex:string
    index?:string
}
const Data:Array<T>=[
    {
        name:'清远香蕉',
        origin:'清远',
        buyPrice:5.50,
        buyWeight:5000,
        salePrice:7.00,
        saleWeight:4500,
        income:'未计算',
    },
    {
        name:'海南香蕉',
        origin:'海南',
        buyPrice:9.50,
        buyWeight:5000,
        salePrice:12.00,
        saleWeight:5000,
        income:'未计算',
    }
]

const Columns:Array<T2>=[
    {
        title:'产品名称',
        dataIndex:'name',
        index:'name'
    },
    {
        title:'产地',
        dataIndex:'origin',
        index:'origin'
    },
    {
        title:'购入价格(每斤)',
        dataIndex:'buyPrice',
        index:'buyPrice'
    },
    {
        title:'购入重量(斤)',
        dataIndex:'buyWeight',
        index:'buyWeight'
    },
    {
        title:'卖出价格(每斤)',
        dataIndex:'salePrice',
        index:'salePrice'
    },
    {
        title:'卖出重量(斤)',
        dataIndex:'saleWeight',
        index:'saleWeight'
    },
    {
        title:'收入',
        dataIndex:'income',
        index:'income'
    },
] 

export {Data,Columns}