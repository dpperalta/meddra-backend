const generatePagination = (totalItems, offset, limit) => {
    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.floor(offset / limit) + 1;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;
    const prevPage = currentPage > 1 ? currentPage - 1 : null;

    return {
        totalItems,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
    };
}

module.exports = {
    generatePagination  
}