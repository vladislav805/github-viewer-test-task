import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import * as reducers from './reducers';

if (!process.env.GITHUB_TOKEN) {
    const str = 'Cannot find GITHUB_TOKEN. Please, make sure that you added GitHub token to .env before build/run app';
    alert(str);
    throw new Error(str);
}

const store = createStore(combineReducers(reducers));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
