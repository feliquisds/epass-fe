import axios from 'axios';

// A URL base da sua API
const api = axios.create({
    baseURL: 'http://192.168.15.90:8080'

})

export default api;