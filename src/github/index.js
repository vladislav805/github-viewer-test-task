const getEndpoint = method => `https://api.github.com/${method}`;

const githubRequest = async(method) => fetch(getEndpoint(method), {
    headers: {
        'Authorization': 'token ' + process.env.GITHUB_TOKEN,
    }
}).then(res => res.json())

export const fetchListPublicRepositories = async() => githubRequest('repositories');
export const fetchRepositoryInfo = async(fullName) => githubRequest(`repos/${fullName}`);
export const fetchRepositoryContent = async(fullName, path = '/') => githubRequest(`repos/${fullName}/contents/${path}`);
