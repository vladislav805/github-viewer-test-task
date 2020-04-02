import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import githubReducer from './reducers/github';

if (!process.env.GITHUB_TOKEN) {
    const str = 'Cannot find GITHUB_TOKEN. Please, make sure that you added GitHub token to .env before build/run app';
    alert(str);
    throw new Error(str);
}

if (process.env.GITHUB_TOKEN === 'none') {
    alert('The mode without token is used. Github resolves 60 requests in 2 hours. Use a token to increase the limit.');
}

const store = createStore(githubReducer);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
