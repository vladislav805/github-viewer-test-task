import React from 'react';
import './repository-item.scss';
import { Link } from 'react-router-dom';

const RepositoryItem = ({ repository }) => {
    const {
        name: repoName,
        full_name: repoFullName,
        owner: {
            login,
            avatar_url: avatar,
        },
        description,
        fork,
    } = repository;

    return (
        <article className="repository-item">
            <img className="repository-item--photo" src={avatar} alt={login} />
            <div className="repository-item--info">
                <h2 title={repoFullName}><Link to={`/${repoFullName}`}>{login} / {repoName}</Link></h2>
                <p className="repository-item--description">{description}</p>
            </div>
        </article>
    );
};

export default RepositoryItem;
