import axios from 'axios';

class ApiService {

    sendRequest(query) {
         return axios.post("http://api.weatherstack.com/current?access_key=cfd3ad17303f6603902b474daa1f3c6f&query=" + query, "")
    }
}
export default new ApiService();