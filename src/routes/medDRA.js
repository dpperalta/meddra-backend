const { Router } = require('express');
const { getMedDRATerms, searchLltTerm } = require('../controllers/medDRA');

const router = Router();

router.get('/get-terms', getMedDRATerms);

router.get('/search-terms', searchLltTerm);

module.exports = router;