import React from 'react';
import {observer} from "mobx-react-lite";
import {Container, Loader} from "..";
import classes from "./GithubUserContainer.module.css";
import loupe from "../../assets/images/loupe.svg";
import oneUser from "../../assets/images/oneUser.svg";
import TextWithImage from "../TextWithImage/TextWithImage";
import searchStore from "../../state/searchStore";
import GithubUser from "./GithubUser/GithubUser";
import classNames from "classnames";
import {toJS} from "mobx";

const GithubUserContainer = observer(() => {
    const user = searchStore.user;
    const isLoading = searchStore.isLoading;
    console.log("user", toJS(user));

    const Component = {
        undefined: DidNotSearched,
        null: NotFound,
    }[user] || GithubUser;

    const innerClassName = classNames({
        [classes.inner]: true,
        [classes.center]: Component === DidNotSearched || Component === NotFound,
    });

    return (
        <main className={classes.root}>
            <Container className={innerClassName}>
                {isLoading ?
                    <Loader/> :
                    <Component/>
                }
            </Container>
        </main>
    );
});

const DidNotSearched = () => (
    <TextWithImage text={"Start with searching\na GitHub user"}
                   image={loupe}
                   width={65}
                   height={75}
    />
);
const NotFound = () => (
    <TextWithImage text={"User not found"}
                   image={oneUser}
                   width={64}
                   height={64}
    />
);

export default GithubUserContainer;