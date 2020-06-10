import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { setUserSession } from "../Utils/Common";

import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      
      errors: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    const { LoginToggle, loggedIn } = this.props;

    axios
      .post("https://evening-mesa-59655.herokuapp.com/api/login", user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.access_token);
        setUserSession(response.data.access_token);
        if (!loggedIn) {
          LoginToggle();
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.errors);
          this.setState({
            errors: err.response.data.errors,
            displayErrors: true,
            success: "",
          });
        }
      });
  }

  renderError(message) {
    if (!message) return null;
    else {
      return (
        <div>
          {Object.keys(message).map((field) => (
            <div
              key={field}
              className="p-3 mb-2 bg-danger text-white text-white text-center"
              style={{ display: "block" }}
            >
              {message[field].map((error) => (
                <div key={field}>{error}</div>
              ))}
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="container" style={{ padding: "100px 16px" }}>
        <div className="row card">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              {this.state.displayErrors
                ? this.renderError(this.state.errors)
                : ""}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
