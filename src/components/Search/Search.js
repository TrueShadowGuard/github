import React from 'react';
import classes from "./Search.module.css";
import classNames from "classnames";
import loupe from "../../assets/images/loupe.svg";

const Search = (props) => {
    return (
        <form className={classNames(classes.root, props.className)} onSubmit={onSubmit(props.onSubmit)}>
            <img className={classes.loupe} src={loupe} alt="loupe"/>
            <input className={classes.input} type="text" name="search" placeholder={props.placeholder}/>
        </form>
    );

    function onSubmit(cb) {
        return function (e) {
            e.preventDefault();
            if(cb) cb(e.target.elements.search.value);
        }
    }
};

export default Search;