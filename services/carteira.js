import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Função que retorna os eventos.
export async function getCarteira() {

    const user_id = await AsyncStorage.getItem('user_id');

    try {
        const response = await api.get(`/carteira/aluno/${user_id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar carteira:', error);
        return [];
    }
}
