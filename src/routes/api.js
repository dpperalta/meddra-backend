const { Router } = require('express');
const { getMedDRAByApi } = require('../controllers/viaApi');

const router = Router();

router.get('/api-search', getMedDRAByApi);

//router.get('/search-terms', searchLltTerm);

module.exports = router;