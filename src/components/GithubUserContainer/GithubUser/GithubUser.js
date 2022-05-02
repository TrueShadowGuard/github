import React from 'react';
import classes from "./GithubUser.module.css";
import classNames from "classnames";
import searchStore from "../../../state/searchStore";
import {observer} from "mobx-react-lite";
import GithubUserHeader from "./GithubUserHeader";
import GithubUserRepositories from "./GithubUserRepositories";


const GithubUser = observer((props) => {
    const user = searchStore.user;
    return (
        <div className={classNames(classes.root, props.className)}>
            <GithubUserHeader user={user}/>
            <GithubUserRepositories user={user}/>
        </div>
    );
});

export default GithubUser;