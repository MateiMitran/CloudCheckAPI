import axios from 'axios';

class ApiService {

    sendRequest(query) {
         return axios.post("http://api.weatherstack.com/current?access_key=782df7cffd53719bb7a8c957744b54c4&query=" + query, "")
    }
}
export default new ApiService();