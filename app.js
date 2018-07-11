// App requires
const { argv } = require('./config/yargs');
const city = require('./city/city');
const climate = require('./climate/climate');

const getData = async(address) => {
    let coors = await city.getCity(address);
    let temp = await climate.getClimate(coors.lat, coors.lng);

    return `The climate in ${ coors.address } is ${ temp }`;
}

getData(argv.address).then(rs => {
    console.log(rs);
}).catch(err => console.log(err.message));