import React from 'react';
import './home.scss';
import LoadableContent from '../LoadableContent';
import RepositoryList from '../RepositoryList';
import { fetchListPublicRepositories } from '../../github';
import { cacheRepoList } from '../../reducers/github';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends React.Component {
    state = {
        nextLoading: false,
    };

    componentDidMount() {
        if (!this.props.items) {
            this.fecthListRepositories();
        }
    }

    fecthListRepositories = async(since) => {
        const items = await fetchListPublicRepositories(since);

        this.props.cacheRepoList((this.props.items || []).concat(items));
        this.setState({ nextLoading: false });
    };

    next = () => {
        const list = this.props.items;

        let lastId = undefined;
        if (list.length) {
            lastId = list[list.length - 1].id;
        }

        this.setState({ nextLoading: true });

        this.fecthListRepositories(lastId);
    };

    render() {
        return (
            <div className="home">
                <h1>Public repositories</h1>
                <LoadableContent
                    loading={!this.props.items}
                    render={() => (
                    <RepositoryList
                        key="list"
                        items={this.props.items}
                        next={this.next}
                        nextLoading={this.state.nextLoading} />
                )} />
            </div>
        );
    }
}

const mapStateToProps = store => ({ items: store.publicRepos });
const mapDispatchToProps = dispatch => bindActionCreators({ cacheRepoList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
