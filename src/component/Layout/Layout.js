import React, { Component } from 'react';

import arrow from '../../assets/images/arrow1.png';
import classes from './Layout.module.css';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

class layout extends Component {
    state = {
        showSidebar: false
    }

    closeSidebar = () => {
        this.setState({showSidebar: false});
    }

    SidebarToggle = () => {
        this.setState(prevState => {
            return {showSidebar: !prevState.showSidebar}
        })
    }


    render() {
        return (
            <Aux>
                <div className={classes.Layout}>
                    <Toolbar toggleSidebar={this.SidebarToggle} />
                    <Sidebar closed={this.SidebarToggle} show={this.state.showSidebar} /> 
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                    <div className={classes.Background}>
                        <h1>know your mental <br /> health status</h1>
                    </div>
                    <div className={classes.Arrow}>
                        <img src={arrow} alt="direction" />
                    </div>
                    <button className={classes.Button}>GET STARTED</button>
                    <Footer />
                </div>
            </Aux>
        );
    }
}

export default layout;