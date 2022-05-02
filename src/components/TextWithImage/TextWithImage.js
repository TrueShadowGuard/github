import React from 'react';
import classes from "./TextWithImage.module.css";
import classNames from "classnames";

const TextWithImage = ({text, image, ...props}) => {
    const imageStyle = {};
    if(props.width) imageStyle.width = props.width + "px";
    if(props.height) imageStyle.height = props.height + "px";

    return (
        <div className={classNames(classes.root, props.className)}>
            <img src={image} alt="" style={imageStyle}/>
            <p className={classes.text}>{text}</p>
        </div>
    );
};

export default TextWithImage;