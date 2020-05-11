import React from 'react';

import classes from './NavigationToggler.module.css';

const navigationToggler = (props) => (
    <div className={classes.NavigationToggler} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default navigationToggler;