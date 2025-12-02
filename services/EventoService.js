import DateUtils from '../utils/DateUtils'
import APIService from './APIService'

export default class EventoService {
    #api;

    constructor() {
        const apiService = new APIService();
        this.#api = apiService.getApi();
    }

    async getEventos() {
        try {
            const response = await this.#api.get('/evento/findAll');

            var temp = response.data;
            temp.forEach(element => {
                element.dataInicio = DateUtils.getDaysUntilEvent(element.dataInicio);
            });

            return response.data;
        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
            return null;
        }
    }
}