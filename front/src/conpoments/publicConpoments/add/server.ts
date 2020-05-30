import { action, observable, toJS } from 'mobx'
import axios from 'axios';
import { promises, resolve } from 'dns';

class Server {
    getFruitsData() {

    }
    addFruitsData<T>(data: T) {//泛型
        //await 返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。
        //return axios.get('/api/arr');
        //return axios.post('/fruit/bananas',data);//返回一个promise，处理结果是resolve，或者reject
        // return axios.post('/fruit/bananas',data) //返回一个promise，处理结果是resolve，或者reject
        // //new Promise的时候，只有第一次需要resolve或者reject。之后then或catch肯定会有下一个状态，不会是pending状态，所以不用resolve。返回值相当于resolve
        //         .then((response)=>{//返回一个promise
        //             //return response//根据这个值，判断下一步走then还是catch（相当于执行resolve（response），或者reject（response））
        //         })
        //         .catch((error)=>{//返回一个promise
        //             console.log(error)
        //             return 'error'
        //         })

        // return new Promise( (resolve,reject) => {
        //     resolve('hello')
        //     axios.post('/fruit/bananas',data)
        //     .then((response)=>{
        //         return response
        //     })
        //     .catch((error)=>{
        //         console.log(error)
        //     })
        // })
        return axios.post('/fruit/add', data);
    }
    modifyFruitsData<T>(data: T) {
        return axios.put('/fruit/updata', data);
    }
}

export default new Server()

