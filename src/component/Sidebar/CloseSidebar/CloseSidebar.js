import React from 'react';

import classes from './CloseSidebar.module.css';

const closeSidebar = (props) => (
    <div className={classes.CloseSidebar}>
        <div onClick={props.closed}>CLOSE</div>
    </div>
);

export default closeSidebar;