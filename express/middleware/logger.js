const logger = (text) => {
    return (req, res, next) => {//自带的参数
        console.log(text);
        next();//注释掉这一行的话，网页会一直处于pendding状态
    }
}

module.exports.logger=logger;