import useRepos from "../../../utils/useRepos";
import classes from "./GithubUser.module.css";
import {Loader, Pagination} from "../..";
import React from "react";
import TextWithImage from "../../TextWithImage/TextWithImage";
import repos from "../../../assets/images/repos.svg";
import GithubUserRepository from "./GithubUserRepository";

export default function GithubUserRepositories({user}) {
    const {repos, currentPage, setCurrentPage, lastPage, isLoading} = useRepos(user.repos_url, 4, user.public_repos);

    if(user.public_repos === 0) return <EmptyReposList />;

    return (
        <div className={classes.repositories}>
            <h2 className={classes.reposHeader}>Repositories ({user.public_repos})</h2>
            {isLoading ?
                <div className={classes.reposLoader}>
                    <Loader/>
                </div> :
                <div className={classes.reposList}>
                    {repos.map((repository) => <GithubUserRepository repository={repository} key={repository.name}/>)}
                </div>
            }
            <Pagination currentPage={currentPage}
                        lastPage={lastPage}
                        perPage={4}
                        itemsCount={user.public_repos}
                        setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

const EmptyReposList = () => (
    <div className={classes.emptyReposList}>
        <TextWithImage image={repos} text={"GithubUserRepository list is empty"}/>
    </div>
);