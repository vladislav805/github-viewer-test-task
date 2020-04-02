/*
 * action types
 */

export const FETCH_REPO_LIST = 'FETCH_REPO_LIST';
export const CHANGE_REPO_FILTER = 'REPO_FILTER';

/*
 * other constants
 */

export const RepositoryListFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_OWN: 'SHOW_OWN',
    SHOW_FORK: 'SHOW_FORK',
};

/*
 * action creators
 */

export const cacheRepoList = (user, list) => {
    return { type: FETCH_REPO_LIST, user, list }
}
