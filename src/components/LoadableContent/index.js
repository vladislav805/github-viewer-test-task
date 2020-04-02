import React from 'react';
import PropTypes from 'prop-types';
import './loading-spinner.scss';

const LoadingSpinner = () => (
    <div className="loading">
        <div className="loading-spinner"></div>
    </div>
);

const LoadableContent = ({ loading, render }) => {
    return loading
        ? <LoadingSpinner />
        : render();
};

LoadableContent.propTypes = {
    loading: PropTypes.bool,
    render: PropTypes.func.isRequired,
};

export default LoadableContent;
