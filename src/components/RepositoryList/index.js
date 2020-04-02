import React from 'react';
import './repository-list.scss';
import RepositoryItem from '../RepositoryItem';

class RepositoryList extends React.Component {
    render() {
        const items = this.props.items;

        return (
            <div className="repository-list">
                {items.map(repository => <RepositoryItem key={repository.id} repository={repository} />)}
            </div>
        );
    }
}

export default RepositoryList;
