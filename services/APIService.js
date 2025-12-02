import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class APIService {
    #api;

    constructor() {
        this.#api = axios.create({
            baseURL: 'http://10.77.93.109:8080'
        })

        this.#api.interceptors.request.use(async (config) => {
            const token = await AsyncStorage.getItem('token');

            if (token) config.headers.Authorization = `Bearer ${token}`;

            return config;
        })
    }

    getApi() {
        return this.#api;
    }
}