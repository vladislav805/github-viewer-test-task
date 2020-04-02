import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import './label.scss';

const LabelWithIcon = ({ label, path, color = 'gray', title = undefined }) => (
    <div className="icon-labelled" title={title}>
        <Icon path={path} size={1} color={color} />
        {label}
    </div>
);

LabelWithIcon.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    color: PropTypes.color,
    title: PropTypes.string,
};

export default LabelWithIcon;
