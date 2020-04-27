const axios = require('axios');
const ApiKey = 'd2474aff8cd4b5d46eb7720726477026';

const getTemperatura = async(p_Latitud, p_Longitud) => {
    const rpta = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: p_Latitud,
            lon: p_Longitud,
            units: 'metric',
            appid: ApiKey
        }
    });
    if (!rpta.data) {
        throw new Error('No se ha encontrado información para los datos enviados.');
    } else {
        return {
            temperatura: rpta.data.main.temp
        };
    }
};

module.exports = {
    getTemperatura
};