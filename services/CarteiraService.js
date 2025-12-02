import APIService from './APIService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class CarteiraService {
    #api;

    constructor() {
        const apiService = new APIService();
        this.#api = apiService.getApi();
    }

    async getCarteira() {
        const id = await AsyncStorage.getItem('alunoAtual');

        try {
            const response = await this.#api.get(`/carteira/aluno/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar carteira:', error);
            return null;
        }
    }
}