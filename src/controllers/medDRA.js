const { request, response } = require('express');
const MedDRA = require('../models/MedDRA');
const { generatePagination } = require('../helpers/pagination');
const { where, fn, col } = require('sequelize');

const getMedDRATerms = async( req = request, res = response ) => {
    const limit = req.query.limit || 100;
    const offset = req.query.offset || 0;
    try {
        const meddraTerms = await MedDRA.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [['llt_name', 'ASC']],
        });
        
        if(  meddraTerms.count === 0 ) {
            return res.status(404).json({
                msg: 'No MedDRA terms found'
            });
        }
        const { count, rows } = meddraTerms;
        const { totalPages, currentPage, nextPage, prevPage } = generatePagination( count, offset, limit );
        return res.status(200).json({
            msg: 'MedDRA terms found',
            total: count,
            terms: rows,
            currentPage,
            nextPage,
            prevPage,
            totalPages,
        });

    } catch (error) {
        console.log('Error:'. error);
        return res.status(500).json({
            msg: 'Internal Server Error',
            error: error.message
        });
    }
}

const searchLltTerm = async( req = request, res = response ) => {
    const limit = process.env.LIMIT || 1000;
    const offset = req.query.offset || 0;
    const term = req.query.term || '';
    try {
        //const termRegex = new RegExp(term, 'i');
        const meddraTerms = await MedDRA.findAndCountAll({
            where: where(fn('LOWER', col('llt_name')), 'LIKE', `%${term.toLowerCase()}%`),
            limit: limit,
            offset: offset,
            order: [['llt_name', 'ASC']],
        });
        if(  meddraTerms.count === 0 ) {
            return res.status(404).json({
                msg: 'No MedDRA terms found'
            });
        }
        const { count, rows } = meddraTerms;
        const { totalPages, currentPage, nextPage, prevPage } = generatePagination( count, offset, limit );
        return res.status(200).json({
            msg: 'MedDRA terms found',
            total: count,
            terms: rows,
            currentPage,
            nextPage,
            prevPage,
            totalPages,
        });

    } catch (error) {
        console.log('Error:'. error);
        return res.status(500).json({
            msg: 'Internal Server Error - Serach Term',
            error: error.message
        });
    }
}

module.exports = {
    getMedDRATerms,
    searchLltTerm
}