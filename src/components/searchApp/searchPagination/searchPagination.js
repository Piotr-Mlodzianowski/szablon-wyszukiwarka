import React, {useContext, useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import {DataContext} from "../../../DataContext";

const SearchPagination = ({filteredByNameAndFilter, filter}) => {
    const {setCurrentItems} = useContext(DataContext);

    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 3;
    const endOffset = itemOffset + itemsPerPage;

    const pageCount = Math.ceil(filteredByNameAndFilter.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filteredByNameAndFilter.length;
        setItemOffset(newOffset);
        setCurrentPage(event.selected);
    };

    useEffect(() => {
        setCurrentItems(filteredByNameAndFilter.slice(itemOffset, endOffset));
    }, [itemOffset, endOffset, filteredByNameAndFilter, setCurrentItems]);

    useEffect(() => {
        setCurrentPage(0);
        setItemOffset(0);
    }, [filter]);

    const count = filteredByNameAndFilter.length;
    const naming = () => {
        if (count === 1) {
            return `${count} wynik`
        } else if (count <= 4) {
            return `${count} wyniki`
        } else {
            return `${count} wyników`
        }
    }

    return (
        <div className="container">
            <div className="paginate">
                <div className='results'>{naming()}</div>
                <ReactPaginate
                    className='pagination'
                    containerClassName='pagination-container'
                    breakLabel="..."
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    activeClassName="page-current"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    forcePage={currentPage}
                />
            </div>
        </div>
    );
};

export default SearchPagination;