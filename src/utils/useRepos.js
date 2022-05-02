import {useEffect, useState} from "react";

export default function useRepos(reposUrl, perPage, reposCount) {
    const [currentPage, setCurrentPage] = useState(1);
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const url = new URL(reposUrl);
                url.searchParams.append("page", currentPage);
                url.searchParams.append("per_page", perPage);
                setIsLoading(true);
                const response = await fetch(url.toString(), {
                    headers: {
                        Authorization: "token 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"
                    }
                });
                setRepos(await response.json());
            } catch(e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [currentPage]);

    const lastPage = Math.ceil(reposCount / perPage);

    return {repos, currentPage, setCurrentPage, lastPage, isLoading}
}