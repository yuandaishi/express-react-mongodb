const express = require('express');
//const app = express();//这样写的话，将路由独立到单独文件中就没用效果了。需要router
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world')
    //res.render('index',{title: 'yuands', message: '我们是害虫我们是害虫'});//渲染模板
})

module.exports = router;