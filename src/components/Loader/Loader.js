import React from 'react';
import classes from "./Loader.module.css";
import classNames from "classnames";

const Loader = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;