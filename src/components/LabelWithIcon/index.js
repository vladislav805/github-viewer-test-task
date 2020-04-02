import React from 'react';
import Icon from '@mdi/react';
import './label.scss';

const LabelWithIcon = ({ label, path, color = 'gray', title = undefined }) => (
    <div className="icon-labelled" title={title}>
        <Icon path={path} size={1} color={color} />
        {label}
    </div>
);

export default LabelWithIcon;
