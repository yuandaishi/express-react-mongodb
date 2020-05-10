import axios from 'axios';

class Server{
    getData = <T>(page:T) => {
        return axios.get('/fruit/get/banana',page);
    }
}
export default new Server();