// Packages requires
const argv = require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'Address of city for optain the climate',
            demand: true
        }
    })
    .argv;

module.exports = {
    argv
}