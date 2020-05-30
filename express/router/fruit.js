const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('joi');

mongoose.connect('mongodb://localhost:27017/fruit', { useNewUrlParser: true })//连接数据库
    .then(() => console.log('connect...,连接数据库中'))
    .catch(() => console.error('can not connect'));

const bananaSchema = new mongoose.Schema({//创建数据模型
    type: String,
    name: String,
    origin: String,
    buyPrice: Number,
    buyWeight: Number,
    salePrice: Number,
    saleWeight: Number,
    income: Number,
    date: { type: Date, default: Date.now },
})

const Banana = mongoose.model('banana', bananaSchema);//连接数据表

// 增
async function addBanana(data, res) {
    const banana = new Banana(data)//实例化这个类   
    const result = await banana.save()
    if (!result) {
        res.status(500).send({ msg: '服务有问题，请联系相关人员' })
    }
    res.send({ status: 200, msg: 'success' });//没有send，前端将会一直处于pending状态
}

//查
const getFruit = async (req, res) => {
    const { page, pageSize, filter } = { ...req.query };//前端传过来的是number，但是后台这里是string
    // console.log(typeof pageSize)
    // console.log(req.query, req.body);
    //const page=2;
    //const pageSize=10;//实际会从接口中获取
    if (req.params.name === 'banana') {
        let findObj = JSON.parse(filter);
        let findObjN = {};
        for (var key in findObj) {
            if (key !== 'income') {//不是收入的话，搜索正则匹配
                findObjN[key] = new RegExp(findObj[key], 'i');
            } else {
                findObjN[key] = findObj[key];
            }
        }
        let total = await Banana//获取数量
            .find(findObjN)
            .count()

        let data = await Banana
            .find(findObjN)//直接搜索对象，就是搜索匹配对象中的所有值
            //.find({ income: { $gt: Number(income) || 0 } })//使用比较符
            // .find({ price: { $gt: 10,$lt: 20 } })//使用比较符
            // /find({ price: { $in: [10, 20, 30] }})//查找price等于10或者20或者30
            //.find({ name: name, origin: origin })//{isPublished: true,author: 'yuands',}
            .skip((Number(page) - 1) * Number(pageSize))//分页功能（skip表示跳过的数据数量，例如页码从1开始的话，如果要查找第二页的数量，则要跳过第一页的数量，则skip((page-1)*pageSize)，如果页码从0开始，就是说前端传0的时候，要获取第一页的数据，则skip(page*pageSize))
            //.limit(pageSize)//返回多少条数据
            .limit(Number(pageSize))
            .sort({ _id: -1 })//1表示正向排序，-1表示负向。sort中的对象，按照key的先手顺序进行依次排序处理
            .select();
        //.select({name:1,tags:1})//_id始终都会返回，最终一步就是select,参数表示返回的属性,如果只想获取数量，使用count
        //.count()

        //逻辑操作符
        // .find()
        // .or([ {name: 'yuands'}, {price: 10}])//name==yuands||price==10,and操作符类似

        //正则操作符
        // .find({name: /正则表达式/})  例如find({name: /^yuan/})
        if (!data) {//不设置这段代码的话，如果路径符合上述任何一个API地址的话，则返回的状态码是200,如果路径中没有符合的，则返回400
            res.status(404).send({ msg: '找不到相应的内容' })
        }
        res.send({
            status: 200,
            total: total,
            data: data,
            msg: 'success'
        });
    }
}

const update = async (data, res) => {
    console.log(data);
    const banana = await Banana.findById(data._id);
    if (!banana) return;
    banana.set(data);
    const result = await banana.save();
    if (!result) {
        res.status(500).send({ msg: '服务有问题，请联系相关人员' })
    }
    res.send({ data: result, msg: 'success', status: 200 });//没有send
}

//路径中有get的时候，执行以下查找方法
router.get('/get/:name', (req, res) => {//查
    //从数据库中获取数据
    getFruit(req, res)
})

router.put('/updata', (req, res) => {//更新
    update(JSON.parse(JSON.stringify(req.body)), res);
})

router.post('/add', (req, res) => {//post请求放在请求体中
    // 提交的水果类型，后端根据类型，存到不同的表中
    const valite = {
        type: Joi.string().min(1),
        name: Joi.string().min(1),
        origin: Joi.string().min(1),
        buyPrice: Joi.number(),
        buyWeight: Joi.number(),
        salePrice: Joi.number(),
        saleWeight: Joi.number(),
        income: Joi.number(),
    }
    const rule = Joi.validate(req.body, valite);
    if (rule.error) {
        res.status(400).send('请求发送的字段不符合规则');
        return;
    }
    if (req.body.type === 'banana') {//根据水果类型不同，存到不同的表中
        addBanana(req.body, res);
    }
})

module.exports = router;