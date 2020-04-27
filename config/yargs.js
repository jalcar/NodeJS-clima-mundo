const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            demand: true,
            desc: 'Ciudad de donde se desea optener el clima.'
        }
    })
    .argv;

module.exports = {
    argv
};