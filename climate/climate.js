// Packages requires
const axios = require('axios');

// Variables
const KEY = "976d69762c2955c43507a688b289f900";

// Used for get the climate of city
const getClimate = async(lat, lng) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ KEY }`;
    let rs = await axios.get(url);

    if (rs.data.cod === 200)
        return rs.data.main.temp;

    throw new Error('Results not found.');
}

module.exports = {
    getClimate
}