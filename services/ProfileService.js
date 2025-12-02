import APIService from "./APIService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ProfileService {
    #api;

    constructor() {
        const apiService = new APIService();
        this.#api = apiService.getApi();
    }

    async getProfile() {
        const id = await AsyncStorage.getItem('id');
        try {
            const response = await this.#api.get(`/responsavel/find/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar perfil: ', error);
            return null;
        }
    }

    async editProfile(profileData) {
        try {
            const currentUser = await AsyncStorage.getItem('id');
            const currentUserObject = await this.#api.get(`/responsavel/find/${currentUser}`);

            var updatedUserObject = currentUserObject.data;
            updatedUserObject.email = profileData.email;
            updatedUserObject.endereco = profileData.endereco;
            updatedUserObject.telefone = profileData.telefone;

            const response = await this.#api.update(`/responsavel/update/${currentUser}`, {
                ...updatedUserObject
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao editar perfil:', error);
            throw error;
        }
    }
}