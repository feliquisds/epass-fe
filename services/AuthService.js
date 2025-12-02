import APIService from './APIService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AuthService {
    #api;

    constructor() {
        const apiService = new APIService();
        this.#api = apiService.getApi();
    }

    async login(email, senha) {
        try {
            const response = await this.#api.post('/auth/login', { email, senha });
            return response.data; // retorna { tipoUsuario, id, token }
        } catch (error) {
            if (error.response) {
                throw new Error(error.response.data || 'Erro no login');
            } else {
                throw new Error('Erro de conexão com a API');
            }
        }
    }

    async logout() {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('tipoUsuario');
        await AsyncStorage.removeItem('id');
        await AsyncStorage.removeItem('qtdAlunos');
        await AsyncStorage.removeItem('alunoAtual');
    }
}