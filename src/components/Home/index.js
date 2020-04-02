import React from 'react';
import './home.scss';
import LoadableContent from '../LoadableContent';
import RepositoryList from '../RepositoryList';
import { fetchListPublicRepositories } from '../../github';

class Home extends React.Component {
    state = {
        items: null,
    };

    componentDidMount() {
        this.fecthListRepositories();
    }

    fecthListRepositories = async() => {
        const items = await fetchListPublicRepositories();

        this.setState({ items });
    }

    render() {
        return (
            <div className="home">
                <h1>Public repositories</h1>
                <LoadableContent loading={!this.state.items} render={() => (
                    <RepositoryList items={this.state.items} />
                )} />
            </div>
        );
    }
}

export default Home;
