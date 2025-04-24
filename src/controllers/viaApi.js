const { request, response } = require('express');
const { meddaApi } = require('../config/meddraApi');
const MedDRA = require('../models/MedDRA');
const payloadSource = require('../config/payload');

const getMedDRAByApi = async( req = request, res = response ) => {
    const term = req.query.term || 'anafilaxia';
    const { payload } = payloadSource;
    // NOTE: Example payload modification to include the search term (just for one search term)
    // You must ensure that the payload structure matches the API requirements
    // and that the search term is correctly formatted.
    // You can inject more terms if needed, or change logic as shown.
    // payload.searchterms[0].searchlogic = 0; // 0 = AND, 1 = OR
    // payload.searchterms[0].searchtype = 0; // 0 = Exact, 1 = Contains, 2 = Starts with, 3 = Ends with
    payload.searchterms[0].searchterm = term;
    try {
        let meddra = [];
        console.log(`REQUEST - Base URL: https://mapisbx.meddra.org/api/search - Method: POST`);
        const apiResponse = await meddaApi.post('/search', payload);
        console.log(`RESPONSE - Format: JSON - Status: ${apiResponse.status}`);
        if( apiResponse.length === 0 ) {
            return res.status(404).json({
                msg: 'No MedDRA terms found'
            });
        }
        for( let i=0; i < apiResponse.data.length; i++ ) {
            let lltCode = apiResponse.data[i].code;
            const lltFound = await MedDRA.findOne({
                where: { llt_code: lltCode }
            });
            meddra.push({
                meddraData: apiResponse.data[i],
                lltTree: lltFound
            });
        }
        return res.status(200).json({
            msg: 'UMC MedDRA API results got successfully',
            result: meddra
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            msg: 'Internal Server Error',
            error: error.message
        });
    }
}

module.exports = {
    getMedDRAByApi
}