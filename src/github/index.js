import qs from 'querystring';

const getEndpoint = method => `https://api.github.com/${method}`;

const getCustomHeader = () => process.env.GITHUB_TOKEN !== 'none' ? {
    'Authorization': 'token ' + process.env.GITHUB_TOKEN,
} : {};

const githubRequest = async(method, props = {}) => fetch(getEndpoint(method) + (props ? '?' + qs.stringify(props) : ''), {
    headers: getCustomHeader()
}).then(res => res.json())

export const fetchListPublicRepositories = async(since) => githubRequest('repositories', since && { since });
export const fetchRepositoryInfo = async(fullName) => githubRequest(`repos/${fullName}`);
export const fetchRepositoryContent = async(fullName, path = '/') => githubRequest(`repos/${fullName}/contents/${path}`);
