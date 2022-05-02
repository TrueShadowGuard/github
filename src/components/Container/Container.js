import React from 'react';
import classes from "./Container.module.css";
import classNames from "classnames";

const Container = (props) => {
    return (
        <div className={classNames(classes.container, props.className)}>
            {props.children}
        </div>
    );
};

export default Container;