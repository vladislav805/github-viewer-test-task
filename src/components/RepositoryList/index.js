import React from 'react';
import PropTypes from 'prop-types';
import './repository-list.scss';
import RepositoryItem from '../RepositoryItem';

const RepositoryList = ({ items, next, nextLoading }) => (
    <div className="repository-list">
        {items.map(repository => <RepositoryItem key={repository.id} repository={repository} />)}
        <button
            className="repository-list--button-next"
            disabled={nextLoading}
            onClick={next}>
            Next
        </button>
    </div>
);

RepositoryList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    next: PropTypes.func.isRequired,
    nextLoading: PropTypes.bool,
};

export default RepositoryList;
