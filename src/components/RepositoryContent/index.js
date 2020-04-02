import React from 'react';
import './repository-content.scss';
import { fetchRepositoryContent } from '../../github';
import LoadableContent from '../LoadableContent';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import {
    mdiFolderOpenOutline as iconDirectory,
    mdiFileOutline as iconFile,
    mdiFolderOpen as iconDirectoryCurrent
} from '@mdi/js';

const ItemLink = ({ repo, item, children }) => item.type === 'file'
    ? <a href={item.download_url} target="_blank" rel="noopener noreferer" className="file">{children}</a>
    : <Link to={`/${repo}/${item.path}`} className="file">{children}</Link>;

const Item = ({ repo, item }) => (
    <ItemLink repo={repo} item={item}>
        <div className="file-icon">
            <Icon
                path={item.type === 'dir' ? iconDirectory : iconFile}
                size={1} />
        </div>
        <div className="file-name">{item.name}</div>
    </ItemLink>
);

class RepositoryContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: null,
            path: props.path,
        };
    }

    componentDidMount() {
        this.fetchContent();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.path !== this.props.path) {
            this.setState({
                items: null,
                path: this.props.path,
            }, this.fetchContent);
        }
    }

    fetchContent = async() => {
        const path = this.props.path;
        const items = await fetchRepositoryContent(this.props.repo, path);
        items.sort((a, b) => a.type > b.type);

        if (path) {
            const parent = path.split('/');
            --parent.length;
            items.unshift({
                type: 'dir',
                name: '..',
                path: parent.join('/'),
            });
        }
        this.setState({ items });
    };

    render() {
        const { items } = this.state;
        const { path, repo } = this.props;

        return (
            <div className="files">
                <div className="files-header file">
                    <div className="file-icon">
                        <Icon
                            path={iconDirectoryCurrent}
                            size={1} />
                    </div>
                    <div className="file-name">/{path}</div>
                </div>
                <div className="files-list">
                    <LoadableContent
                        loading={!items}
                        render={() => items.map(file => (
                            <Item key={file.path} repo={repo} item={file} />
                        ))} />
                </div>
            </div>
        );
    }
};

export default RepositoryContent;
