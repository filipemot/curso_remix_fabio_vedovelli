import invariant from "tiny-invariant";

export const getGithubUser = async(username?: string) => {

    invariant(username, 'username is required');

    const res = await fetch(`https://api.github.com/users/${username}` );

    const {login, avatar_url, html_url, bio} = await res.json();

    return {login, avatar_url, html_url, bio};
    
}