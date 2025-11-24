import api from "./api";

// Função que retorna os eventos.
export async function getEvent() {
    try {
        const response = await api.get("/evento/findAll");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar evento:", error);
        return [];
    }
}
