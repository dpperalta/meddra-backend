const axios = require('axios');

const meddaApi = axios.create({
    baseURL: 'https://mapisbx.meddra.org/api/',
    timeout: 100000,
    headers: {
        'Authorization': `Bearer ${process.env.MEDDRA_API_KEY}`,
        'Content-Type': 'application/json',
    }
});

module.exports = {
    meddaApi
};