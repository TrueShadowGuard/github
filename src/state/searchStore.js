import {makeAutoObservable} from "mobx"

const GITHUB_API_URL = "https://api.github.com/users/";

class SearchStore {
    user = undefined;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async searchUser(userName) {
        try {
            this.setLoading(true);
            const userResponse = await fetch(GITHUB_API_URL + userName);
            const user = await userResponse.json();
            if(user.message === "Not Found") return this.setUser(null);

            this.setUser(user);
        } catch (e) {
            console.log(e)
        } finally {
            this.setLoading(false);
        }
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(isLoading) {
        this.isLoading = isLoading;
    }
}

export default new SearchStore();