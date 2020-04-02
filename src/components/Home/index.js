import React from 'react';
import './home.scss';
import LoadableContent from '../LoadableContent';
import RepositoryList from '../RepositoryList';
import { fetchListPublicRepositories } from '../../github';
import { cacheRepoList } from '../../reducers/github';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends React.Component {
    componentDidMount() {
        if (!this.props.items) {
            this.fecthListRepositories();
        }
    }

    fecthListRepositories = async() => {
        const items = await fetchListPublicRepositories();

        this.props.cacheRepoList(items);
    }

    render() {
        return (
            <div className="home">
                <h1>Public repositories</h1>
                <LoadableContent loading={!this.props.items} render={() => (
                    <RepositoryList items={this.props.items} />
                )} />
            </div>
        );
    }
}

const mapStateToProps = store => ({ items: store.publicRepos });
const mapDispatchToProps = dispatch => bindActionCreators({ cacheRepoList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
