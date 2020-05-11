import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Sidebar.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import CloseSidebar from './CloseSidebar/CloseSidebar';
import Logo from '../Logo/Logo';

const sidebar = (props) => {

    let attachedClasses = [classes.Sidebar, classes.Close];

    if(props.show) {
        attachedClasses = [classes.Sidebar, classes.Open];
    }
    return (
        <Aux>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <nav>
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <NavigationItems />
                    <CloseSidebar />
                </nav>
            </div>
        </Aux>
    );
};

export default sidebar;