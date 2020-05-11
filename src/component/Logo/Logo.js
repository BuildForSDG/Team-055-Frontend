import React from 'react';

import mindCareLogo from '../../assets/images/md-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={mindCareLogo} alt="Logo" />
    </div>
);

export default logo;