// const argv = require('./config/yargs').argv;
const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getCoordenadasLugar(argv.direccion)
//     .then(rptaOK => {
//         console.log(rptaOK);
//     })
//     .catch(rptaER => {
//         console.log(rptaER);
//     });

// clima.getTemperatura(-5.710000, -79.279999);

const ObtenerTemperatura = async(p_Direccion) => {
    try {
        let lugarData = await lugar.getCoordenadasLugar(p_Direccion);
        let climaData = await clima.getTemperatura(lugarData.latitud, lugarData.longitud);

        return `El clima de "${ lugarData.direccion }" es de ${ climaData.temperatura }`;
    } catch (error) {
        return `No se pudo determinar el clima de "${ p_Direccion }"`;
    }
};

ObtenerTemperatura(argv.direccion)
    .then(console.log)
    .catch(console.log);