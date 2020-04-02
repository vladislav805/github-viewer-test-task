import React from 'react';
import './repository-page.scss';
import { fetchRepositoryInfo } from '../../github';
import {
    mdiCodeTags as iconLanguage,
    mdiSourceFork as iconFork,
    mdiStar as iconStars,
    mdiEye as iconWatchers,
    mdiPackageDown as iconArchived,
    mdiAlertCircleOutline as iconIssues,
    mdiCalendarImport as iconDateCreate,
    mdiUpdate as iconDateUpdate
} from '@mdi/js';
import LabelWithIcon from '../LabelWithIcon';
import LoadableContent from '../LoadableContent';
import { Link } from 'react-router-dom';
import RepositoryContent from '../RepositoryContent';


class RepositoryPage extends React.Component {
    state = {
        repo: null,
    };

    componentDidMount() {
        this.fetchRepositoryInfo();
    }

    componentDidUpdate(prevProps, prevState) {
        const current = this.getRepositoryName(this.state);
        const href = this.getRepositoryNameFromProps();

        if (href !== current) {
            this.fetchRepositoryInfo();
        }
    }

    fetchRepositoryInfo = async() => {
        const repo = await fetchRepositoryInfo(this.getRepositoryName());
        this.setState({ repo });
    };

    getRepositoryNameFromProps = () => {
        const { owner, name } = this.props.match?.params;
        return `${owner}/${name}`;
    }

    getRepositoryName = (props = this.state) => {
        return props.repo?.full_name || this.getRepositoryNameFromProps();
    };

    toDateString = date => `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    renderRepoInfo = () => {
        const {
            full_name: repoFullName,
            owner: {
                login,
                avatar_url: avatar,
            },
            name: repoName,
            description,
            fork,
            created_at: createdAt,
            updated_at: updatedAt,
            stargazers_count: stars,
            watchers_count: watches,
            forks_count: forks,
            language,
            archived,
            open_issues_count: issues,
            parent,
        } = this.state.repo;

        return (
            <div className="repository-page">
                <div className="repository-header">
                    <div className="repository-author">
                        <img className="repository-author--photo" src={avatar} alt={login} />
                        <Link className="repository-author--user" to={`/${login}`}>{login}</Link>
                    </div>
                    <h1>{repoName}</h1>
                    <p className="repository-description">{description}</p>
                    {language && <LabelWithIcon
                        path={iconLanguage}
                        label={language} />}
                    <LabelWithIcon
                        path={iconDateCreate}
                        label={`Created at ${this.toDateString(new Date(createdAt))}`}
                        title="Date of creation" />
                    <LabelWithIcon
                        path={iconDateUpdate}
                        label={`Updated at ${this.toDateString(new Date(updatedAt))}`}
                        title="Date of last update" />
                    {fork && parent && (
                        <LabelWithIcon
                            path={iconFork}
                            label={(
                                <>
                                    Forked&nbsp;from&nbsp;
                                    <Link to={`/${parent.full_name}`}>{parent.full_name}</Link>
                                </>
                            )} />
                    )}
                    {archived && (
                        <LabelWithIcon
                            path={iconArchived}
                            label="Archived" />
                    )}
                    <div className="repository-counter">
                        <div className="repository-counter__item">
                            <LabelWithIcon path={iconStars} label={stars} />
                        </div>
                        <div className="repository-counter__item">
                            <LabelWithIcon path={iconWatchers} label={watches} />
                        </div>
                        <div className="repository-counter__item">
                            <LabelWithIcon path={iconFork} label={forks} />
                        </div>
                        <div className="repository-counter__item">
                            <LabelWithIcon path={iconIssues} label={issues} />
                        </div>
                    </div>
                </div>
                <RepositoryContent path={this.props.match.params.path || ''} repo={repoFullName} />
            </div>
        );
    };

    render() {
        return (
            <LoadableContent loading={!this.state.repo} render={this.renderRepoInfo} />
        );
    }
}

export default RepositoryPage;
