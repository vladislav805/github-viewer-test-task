import React, { useEffect, useState } from 'react';
import './header.scss';
import { Link, withRouter } from 'react-router-dom';

const Header = ({ location, history }) => {
    const [path, setPath] = useState(location.pathname);

    const updateHeaderTitle = location => {
        if (location.pathname !== path.pathname) {
            setPath(location.pathname);
        }
    };

    useEffect(() => {
        history.listen(updateHeaderTitle);
    });

    const title = path === '/' ? 'List' : 'Repository';

    return (
        <header className="header">
            <div className="header-content">
                <nav>
                    <ul>
                        <li><Link to="/" className="header-logo">GitHub Viewer</Link></li>
                    </ul>
                </nav>
                <h2>{title}</h2>
            </div>
        </header>
    );
};

export default withRouter(Header);
