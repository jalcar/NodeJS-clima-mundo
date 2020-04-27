const axios = require('axios');

const getCoordenadasLugar = async(p_Direccion) => {
    // const urlEncode = encodeURI(p_Direccionp_Direccion);
    // // console.log(urlEncode);
    // const instance = axios.create({
    //     // baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ urlEncode }`,
    //     baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    //     headers: {
    //         'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
    //         'x-rapidapi-key': '506a1bffbdmsh3b870d1648191d4p127c13jsnd3010014da44'
    //     },
    //     params: {
    //         location: p_Direccion
    //     }
    // });

    // instance.get()
    //     .then(rptaOK => {
    //         console.log(rptaOK.data.Results[0]);
    //     })
    //     .catch(rptaER => {
    //         console.log(rptaER);
    //     });

    const rpta = await axios.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php', {
        params: {
            location: p_Direccion
        },
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '506a1bffbdmsh3b870d1648191d4p127c13jsnd3010014da44'
        }
    });

    if (rpta.data.Results.length === 0) {
        throw new Error(`No se han encontrado resultados para ${ p_Direccion }`);
    } else {
        return {
            direccion: rpta.data.Results[0].name,
            latitud: rpta.data.Results[0].lat,
            longitud: rpta.data.Results[0].lon
        };
    }
};

module.exports = {
    getCoordenadasLugar
};