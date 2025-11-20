// src/utils/dateUtils.js

/**
 * Calcula a diferença em dias entre a data do evento e a data atual.
 * @param {string} eventDateString - A data do evento no formato 'YYYY-MM-DD'.
 * @returns {string} Uma string formatada como "Em X dias", "Hoje" ou "Encerrado".
 */
export const getDaysUntilEvent = (eventDateString) => {
    // 1. Cria a data do evento (ajustando o fuso horário para garantir que seja o início do dia)
    const eventDate = new Date(eventDateString + 'T00:00:00');
    
    // 2. Cria a data de hoje (também ajustando para o início do dia)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 3. Calcula a diferença em milissegundos
    const diffTime = eventDate.getTime() - today.getTime();
    
    // 4. Converte a diferença de milissegundos para dias (arredondando para cima)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return 'Hoje';
    } else if (diffDays === 1) {
        return 'Amanhã';
    } else if (diffDays > 1) {
        return `Em ${diffDays} dias`;
    } else {
        return 'Encerrado'; 
    }
};