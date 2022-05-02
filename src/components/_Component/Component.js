import React from 'react';
import classes from "./Component.module.css";
import classNames from "classnames";

const Component = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>

        </div>
    );
};

export default Component;