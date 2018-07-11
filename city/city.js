// Packages requires
const axios = require('axios');

// Variables
const GEO_API = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const KEY = "AIzaSyD_fPvaU-yJgMG_t5-de0aZFTjrpUwVMjE";

// Used for get address, lat and lng of city
const getCity = async(address) => {
    let encodeUrl = encodeURI(address);
    let rs = await axios.get(`${ GEO_API }${ encodeUrl }&key${ KEY }`);

    if (rs.data.status === 'OVER_QUERY_LIMIT')
        throw new Error('Connections exceeded.');

    if (rs.data.status === 'ZERO_RESULTS')
        throw new Error('Address not foud.');

    let city = {
        address: rs.data.results[0].formatted_address,
        lat: rs.data.results[0].geometry.location.lat,
        lng: rs.data.results[0].geometry.location.lng
    }

    return city;
}

module.exports = {
    getCity
}