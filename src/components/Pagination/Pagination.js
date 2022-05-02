import React from 'react';
import classes from "./Pagination.module.css";
import ReactPaginate from "react-paginate";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";


const Pagination = ({currentPage, lastPage, perPage, itemsCount, setCurrentPage, ...props}) => {
    const firstItemIndex = (currentPage - 1) * perPage + 1;
    const lastItemIndex = Math.min(firstItemIndex + perPage, itemsCount);

    return (
        <div className={classes.root}>
            <p className={classes.text}>{firstItemIndex}-{lastItemIndex} of {itemsCount} items</p>
            <ReactPaginate pageCount={lastPage}
                           previousLabel={<ArrowLeft/>}
                           nextLabel={<ArrowRight/>}
                           className={classes.pagination}
                           activeClassName={classes.active}
                           marginPagesDisplayed={1}
                           pageRangeDisplayed={3}
                           onPageChange={({selected}) => setCurrentPage(selected + 1)}
            />
        </div>
    );
};

export default Pagination;