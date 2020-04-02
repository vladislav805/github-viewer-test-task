import React from 'react';
import './main.scss';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home';
import RepositoryPage from '../RepositoryPage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:owner/:name/:path*' component={RepositoryPage} />
        </Switch>
    </main>
);

export default Main;
