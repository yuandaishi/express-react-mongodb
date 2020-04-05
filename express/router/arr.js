const express = require('express');
const router = express.Router();

const data = [
    {
        name: 'yuands',
        id: 1
    },
    {
        name: 'yuands',
        id: 2
    },
    {
        name: 'yuands',
        id: 3
    },
]

router.get('/', (req, res) => { 
    console.log(req.params);
    res.send([0, 1, 2, 3])
})
router.get('/:year/:month', (req, res) => {
    //res.send(req.params);
    res.send(req.query);
})
router.get('/:id', (req, res) => {
    //res.send(req.params);
    const result = data.find(c => c.id === parseInt(req.params.id))
    if (!result) {//不设置这段代码的话，如果路径符合上述任何一个API地址的话，则返回的状态码是200,如果路径中没有符合的，则返回400
        res.status(404).send('找不到相应的内容')
    }
    res.send(result);
})
//处理post请求
router.post('/',(req, res) => {//post请求放在请求体中
    const valite = {
        name:Joi.string().min(3)
    }
    const result = Joi.validate(req.body,valite);
    console.log(result);
    if (result.error) {
        res.status(400).send('请求发送的字段不符合规则');
        return;
    }
    const newData={
        id: data.length + 1,
        name: req.body.name
    }
    data.push(newData);
    res.send(data);
})
//处理put请求
router.put('/',(req, res) => {
    const result = data.find(c => c.id === parseInt(req.params.id))
    if (!result) {//不设置这段代码的话，如果路径符合上述任何一个API地址的话，则返回的状态码是200,如果路径中没有符合的，则返回400
        res.status(404).send('找不到相应的内容')
    }
    const valite = {
        name:Joi.string().min(3)
    }
    const resultJoi = Joi.validate(req.body,valite);
    if (resultJoi.error) {
        res.status(400).send('请求发送的字段不符合规则');
        return;
    }
    result.name=req.body.name
    res.send( );
})

module.exports = router;