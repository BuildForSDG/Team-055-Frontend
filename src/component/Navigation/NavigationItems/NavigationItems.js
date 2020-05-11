import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='Home'>Home</NavigationItem>
        <NavigationItem link='about'>About</NavigationItem>
        <NavigationItem link='getInvolved'>Get Involved</NavigationItem>
        <NavigationItem link='help'>Help</NavigationItem>
    </ul>
);

export default navigationItems;