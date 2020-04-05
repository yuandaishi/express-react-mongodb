const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('joi');

mongoose.connect('mongodb://localhost:27017/fruit',{useNewUrlParser: true})//连接数据库
.then(() => console.log('connect...,连接数据库中'))
.catch(() => console.error('can not connect'));

const bananaSchema = new mongoose.Schema({//创建数据模型
    type:String,
    name:String,
    origin:String,
    buyPrice:Number,
    buyWeight:Number,
    salePrice:Number,
    saleWeight:Number,
    income:Number,
    date:{ type: Date, default:Date.now},
})

const Banana = mongoose.model('banana', bananaSchema );//连接数据表

// 增
async function addBanana(data,res) {
    const banana = new Banana(data)//实例化这个类   
    const result = await banana.save()
    console.log('xxx',result)
    res.send(result);//没有send，前端将会一直处于pending状态
}


router.get('/get:name',(req,res) => {//查
    //从数据库中获取数据
})

router.post('/add',(req, res) => {//post请求放在请求体中
    // 提交的水果类型，后端根据类型，存到不同的表中
    const valite = {
        type:Joi.string().min(1),
        name:Joi.string().min(1),
        origin:Joi.string().min(1),
        buyPrice:Joi.number(),
        buyWeight:Joi.number(),
        salePrice:Joi.number(),
        saleWeight:Joi.number(),
        income:Joi.number(),
    }
    const rule = Joi.validate(req.body,valite);
    if (rule.error) {
        res.status(400).send('请求发送的字段不符合规则');
        return;
    }
    addBanana(req.body,res);
})

module.exports = router;