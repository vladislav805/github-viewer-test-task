import { RepositoryListFilters, FETCH_REPO_LIST, CHANGE_REPO_FILTER } from '../constants';

const initialState = {
    filter: RepositoryListFilters.SHOW_ALL,
    list: [],
    repos: {},
};

const githubReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPO_LIST: {
            return {
                ...state,
                list: action.list,
            };
        }

        case CHANGE_REPO_FILTER: {
            return {
                ...state,
                filter: action.filter,
            };
        }

        default: {
            return state;
        }
    }
};

export default githubReducer;
