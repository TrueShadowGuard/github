import React from 'react';
import classes from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import {Container, Search} from "..";
import searchStore from "../../state/searchStore";

const Header = () => {
    return (
        <header className={classes.header}>
            <Container className={classes.headerInner}>
                <img src={logo} alt="github logo"/>
                <Search className={classes.search} onSubmit={onSearch} placeholder={"Enter GitHub username"}/>
            </Container>
        </header>
    );

    function onSearch(userName) {
        searchStore.searchUser(userName)
    }
};

export default Header;