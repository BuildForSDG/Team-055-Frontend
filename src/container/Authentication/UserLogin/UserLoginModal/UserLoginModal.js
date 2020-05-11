import React, { Component } from 'react';

import Aux from '../../../../hoc/Auxiliary';
import classes from './UserLoginModal.module.css';
import Backdrop from '../../../../component/UI/Backdrop/Backdrop';

class userLoginModal extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }


    
    render () {

        const modalClasses = [classes.UserLoginModal, this.props.show ? classes.Open : classes.Close]
        
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.cancelBackdrop} />
                <div className={modalClasses.join(' ')}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }

}

export default userLoginModal;