import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Toolbar.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import NavigationToggler from '../Navigation/NavigationToggler/NavigationToggler';
import logo from '../../assets/images/mindcare.png';
import Logo from '../Logo/Logo';

const toolbar = (props) => (
    <Aux>
        <div className={classes.Toolbar}>
            <NavigationToggler clicked={props.toggleSidebar} />
            <nav>
                <div className={classes.DesktopOnly}>
                    <Logo />
                </div>    
                <div className={classes.Img}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={classes.DesktopOnly}>
                    <NavigationItems />
                </div>
            </nav>
    </div>
    </Aux>
);

export default toolbar;