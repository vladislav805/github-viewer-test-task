import React from 'react';
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

export default LoadableContent;
