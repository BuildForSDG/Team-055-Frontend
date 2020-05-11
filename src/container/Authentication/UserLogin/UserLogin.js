import React, { Component } from 'react';

import closeIcon from '../../../assets/images/close.png';
import logo from '../../../assets/images/padlock.png';
import classes from './UserLogin.module.css';
import Input from '../../../component/UI/Form/Input/Input';
import { checkValidity } from '../../../shared/validation';

class userLogin extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Address *'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password *'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            }
        },
        userIsValid: false,
        isChecked: false,
        isSignedUp: false
    }

    toggleCheck = () => {
        this.setState(prevState => {
            return {isChecked: !prevState.isChecked}
        });
    }

    userInputChangeHandler = (event, controlName) => {
        const updateControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
        
        let userIsValid = true;
        for(let controls in updateControls) {
            userIsValid = updateControls[controls].valid && userIsValid;
        }
        this.setState({controls: updateControls, userIsValid: userIsValid});
    }

    submitHandler = (event) => {
        // event.preventDefault();
        
    }

    render() {

        let userDetails = [];        
        
        for(let key in this.state.controls) {
            userDetails.push({id: key, config: this.state.controls[key]});
        }
        const input = userDetails.map(user => (
            <Input
                key={user.id}
                elementType={user.config.elementType}
                elementConfig={user.config.elementConfig}
                value={user.config.value}
                invalid={!user.config.valid}
                touched={user.config.touched}
                shouldValidate={user.config.validation}
                changed={(event) => this.userInputChangeHandler(event, user.id)}
            />
        ))


        return (
            <div className={classes.UserLogin}>
                <img className={classes.Close} src={closeIcon} alt="Close"  onClick={this.props.close} />
                <img className={classes.Logo} src={logo} alt={logo} />
                <h1>Sign in</h1>
                <form onSubmit={this.submitHandler}>
                    {input}
                    <div onClick={this.toggleCheck} className={classes.Checkout}>
                        <input type="checkbox" checked={this.state.isChecked} />
                        <span>Remember Me</span>
                    </div>
                    <button onClick={this.props.close} disabled={!this.state.userIsValid}>SIGN IN</button>
                </form>
                <div className={classes.Span}>
                    <p className={classes.Span1}>Forgot Password</p>
                    <p className={classes.Span2}>Don't have an account? Sign Up</p>
                </div>
            </div>
        );
    }
};

export default userLogin;