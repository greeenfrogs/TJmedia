import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, handlePageClick }) => {

    const handleNextPage = () => {
        handlePageClick(Math.min(currentPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        handlePageClick(Math.max(currentPage - 1, 1));
    };

    const handleFirstPage = () => {
        handlePageClick(1);
    };

    const handleLastPage = () => {
        handlePageClick(totalPages);
    };

    const renderPageNumbers = () => {
        const pages = [];
        const visiblePages = 10;

        for (let page = 1; page <= totalPages; page++) {
            pages.push(
                <button key={page} onClick={() => handlePageClick(page)} className={page === currentPage ? 'active' : ''}>
                    {page}
                </button>
            );

            if (pages.length >= visiblePages) break;
        }

        return pages;
    };

    return (
        <div className="pagination">
            <button onClick={handleFirstPage}>«</button>
            <button onClick={handlePrevPage}>‹</button>
            {renderPageNumbers()}
            <button onClick={handleNextPage}>›</button>
            <button onClick={handleLastPage}>»</button>
        </div>
    );
};

export default Pagination;
