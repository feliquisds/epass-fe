import axios from 'axios';

const API_URL = 'http://192.168.15.90:8080/auth/login';

export const login = async (email, senha) => {
  try {
    const response = await axios.post(API_URL, { email, senha });
    return response.data; // retorna { email, tipoUsuario, token }
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data || 'Erro no login');
    } else {
      throw new Error('Erro de conexão com a API');
    }
  }
};