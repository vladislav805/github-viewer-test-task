// Actions
export const CACHE_REPO_LIST = 'CACHE_REPO_LIST';

// Action creators
export const cacheRepoList = publicRepos => ({ type: CACHE_REPO_LIST, publicRepos });

const initialState = {
    publicRepos: null,
};

const githubReducer = (state = initialState, action) => {
    switch (action.type) {
        case CACHE_REPO_LIST: {
            return {
                ...state,
                publicRepos: action.publicRepos,
            };
        }

        default: {
            return state;
        }
    }
};

export default githubReducer;
