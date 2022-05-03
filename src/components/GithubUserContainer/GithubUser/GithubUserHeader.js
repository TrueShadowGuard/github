import classes from "./GithubUser.module.css";
import twoUsers from "../../../assets/images/twoUsersBold.svg";
import oneUser from "../../../assets/images/twoUsersBold.svg";
import React from "react";

export default function GithubUserHeader({user}) {

    const followers = user.followers > 1000 ? (user.followers / 1000).toFixed(1) + "k" : user.followers;
    const following = user.following > 1000 ? (user.following / 1000).toFixed(1) + "k" : user.following;

    return (
        <header className={classes.header}>
            <img className={classes.avatar} src={user.avatar_url} alt="user avatar"/>
            <p className={classes.name}>{user.name}</p>
            <a className={classes.login} href={user.html_url} target={"_blank"}>{user.login}</a>
            <div className={classes.followersAndFollowing}>
                <div className={classes.followers}>
                    <img src={twoUsers} alt="two users"/>
                    <p>{followers} followers</p>
                </div>
                <div className={classes.following}>
                    <img src={oneUser} alt="one user"/>
                    <p>{following} following</p>
                </div>
            </div>
        </header>
    )
}