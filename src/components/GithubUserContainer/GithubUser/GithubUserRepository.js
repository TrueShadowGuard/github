import classes from "./GithubUser.module.css";
import React from "react";

export default function GithubUserRepository({repository}) {
    return (
        <div className={classes.repository}>
            <a className={classes.repositoryName} href={repository.html_url}>{repository.name}</a>
            <p>{repository.description}</p>
        </div>
    )
}