import React from 'react';
import classes from "./Pagination.module.css";
import classNames from "classnames";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";

const Pagination = ({currentPage, lastPage, perPage, itemsCount, setCurrentPage, ...props}) => {
    const firstItemIndex = (currentPage - 1) * perPage + 1;
    const lastItemIndex = Math.min(firstItemIndex + perPage, itemsCount);
    let middlePage = currentPage - 1 > 0 ? currentPage : currentPage + 1;
    middlePage = middlePage + 1 < lastPage ? middlePage : middlePage - 1;
    
    return (
        <div className={classNames(classes.root, props.className)} onClick={onClick}>
            <p className={classes.name}>{firstItemIndex}-{lastItemIndex} of {itemsCount} items</p>
            <div className={classes.controls}>
                <button className={classes.left} data-to-page={Math.max(1, currentPage - 1)}>
                    <img src={arrowLeft} alt="arrow left"/>
                </button>

                {currentPage > 3 && <button data-to-page={1}>1</button>}
                {currentPage > 3 && <button data-to-page={currentPage - 3}>...</button>}
                <button className={currentPage === middlePage - 1 ? classes.active : ""} data-to-page={middlePage - 1}>{middlePage - 1}</button>
                <button className={currentPage === middlePage ? classes.active : ""} data-to-page={middlePage}>{middlePage}</button>
                <button className={currentPage === middlePage + 1 ? classes.active : ""} data-to-page={middlePage + 1}>{middlePage + 1}</button>
                {currentPage < lastPage - 3 && <button data-to-page={currentPage + 3}>...</button>}
                {currentPage < lastPage - 2 && <button data-to-page={lastPage}>{lastPage}</button>}

                <button className={classes.right} data-to-page={Math.min(lastPage, currentPage + 1)}>
                    <img src={arrowRight} alt="arrow right"/>
                </button>

            </div>
        </div>
    );

    function onClick(e) {
        const target =
                e.target.dataset.toPage ? e.target :
                e.target.closest("[data-to-page]") ?
                e.target.closest("[data-to-page]") : null;
        if(!target) return;

        setCurrentPage(+target.dataset.toPage);
    }
};

export default Pagination;