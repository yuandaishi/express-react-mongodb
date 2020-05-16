import axios from 'axios';

class Server {
    getData = <T>(page: T) => {
        return axios.get('/fruit/get/banana', {//这样写，会在请求头的query中，如果使用post，一般会在请求头的body中
            params: page
        });
    }
}
export default new Server();