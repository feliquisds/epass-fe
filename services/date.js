function getDaysDifference(receivedDateString) {
    // 1. Cria a data de hoje e a data recebida
    const today = new Date();
    const receivedDate = new Date(receivedDateString);

    today.setHours(0, 0, 0, 0);
    receivedDate.setHours(0, 0, 0, 0);
    const timeDifference = receivedDate.getTime() - today.getTime();

    const millisecondsInDay = 1000 * 60 * 60 * 24;
    
    const dayDifference = Math.round(timeDifference / millisecondsInDay);

    return dayDifference;
}