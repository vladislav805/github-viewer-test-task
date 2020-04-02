import React from 'react';
import PropTypes from 'prop-types';
import './repository-list.scss';
import RepositoryItem from '../RepositoryItem';

const RepositoryList = ({ items }) => (
    <div className="repository-list">
        {items.map(repository => <RepositoryItem key={repository.id} repository={repository} />)}
    </div>
);

RepositoryList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

export default RepositoryList;
