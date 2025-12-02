import APIService from "./APIService";

export default class AlunoService {
    #api;

    constructor() {
        const apiService = new APIService();
        this.#api = apiService.getApi();
    }

    async getAlunosByResponsavelId(responsavelId) {
        try {
            const response = await this.#api.get(`/aluno/responsavel/${responsavelId}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar alunos pelo ID do responsável: ', error);
            return null;
        }
    }
}