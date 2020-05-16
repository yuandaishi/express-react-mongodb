const morgan = require('morgan');
const debugOne = require('debug')('app:startup');
const debugTwo = require('debug')('app:db');
const express = require('express');
const {logger} = require('./middleware/logger');
const {index, arr, fruit} = require('./router/out');
const config = require('config');
const app = express();

app.set('view engine', 'pug');//设置模板引擎
app.set('views', './views');//模板引擎放置在什么位置，默认就是views文件夹
app.use(express.json());//中间件
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    //debug('调试信息')//console.log()
}

debugOne('one');
debugTwo('two');

//使用自定义中间件
app.use(logger('加载中'));//这里用的是函数名，而不是执行函数
app.use(express.static('public'));//所有请求都会经过这个中间件

app.use('/',index);//告诉express我们传入的路径，以及使用哪个router来处理这个路径的逻辑
app.use('/api/arr',arr);//相当于执行中间件
//路劲中有fruit的时候。执行fruit中间件
app.use('/fruit',fruit);//执行中间件， router没有new，所以不是新的实例


//直接把这个端口设置成和前端项目相同的端口，访问的时候，并不能直接跳转到这里。
//貌似是哪个服务先启动，则后启动的服务无效，访问3000的时候，如果前端项目先启动，则访问的是前端项目，如果是后端先启动，则访问的是后端项目。
//会提示Something is already running on port 3000.
//实际服务器上并不会启动前端项目，前端最终的形式就是html+js+css
const port = process.env.PORT || '3001';
app.listen(port, () => {//监听哪一个端口。
    console.log('connectting...')
})
