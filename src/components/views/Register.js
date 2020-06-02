import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const styles = {
  errorMessage: {
    color: "red",
    fontSize: "0.75em",
    display: "relative",
  },
};

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: "",
      errors: [],
      success: "",
      displayErrors: false,
      formErrors: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: "",
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "first_name":
        formErrors.first_name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "last_name":
        formErrors.last_name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      case "re_password":
        formErrors.re_password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));

    //this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (formValid(this.state)) {
      const newUser = {
        name: this.state.first_name + " " + this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        re_password: this.state.re_password,
      };

      axios
        .post("https://evening-mesa-59655.herokuapp.com/api/register", newUser)
        .then((newUser) => {
          console.log(newUser);
          this.setState({
            success: "You have succesfully Registered. Sign in to Continue",
            displayErrors: false,
            errors: [],
          });
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
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
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
    const { formErrors } = this.state;
    const {email} = this.state;
    return (
      <div className="container" style={{ padding: "100px 16px" }}>
        <div className="row card">
          <div className="col-md-6 mt-5 mb-5 mx-auto">
            <div className="card-header bg-transparent border-primary">
              <h1 className="h3  text-center font-weight-normal">Register</h1>
              <div
                className="p-3 mb-2 bg-success text-white text-center"
                style={{ display: this.state.success ? "block" : "none" }}
              >
                {this.state.success}
              </div>
              {this.state.displayErrors
                ? this.renderError(this.state.errors)
                : ""}
            </div>

            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-body">
                <div className="row">
                  <div className="col col-sm-12">
                    <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        placeholder="Enter First Name"
                        value={this.state.first_name}
                        onChange={this.onChange}
                      />
                      {formErrors.first_name.length > 0 && (
                        <span style={styles.errorMessage}>
                          {formErrors.first_name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col col-sm-12">
                    <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        placeholder="Enter Last Name"
                        value={this.state.last_name}
                        onChange={this.onChange}
                      />
                      {formErrors.last_name.length > 0 && (
                        <span style={styles.errorMessage}>
                          {formErrors.last_name}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

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
                  {formErrors.email.length > 0 && (
                    <span style={styles.errorMessage}>{formErrors.email}</span>
                  )}
                </div>

                <div className="row">
                  <div className="col">
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
                      {formErrors.password.length > 0 && (
                        <span style={styles.errorMessage}>
                          {formErrors.password}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="re_password">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="re_password"
                        placeholder="Re-Enter Password"
                        value={this.state.re_password}
                        onChange={this.onChange}
                      />
                      {formErrors.re_password.length > 0 && (
                        <span style={styles.errorMessage}>
                          {formErrors.re_password}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-transparent border-primary">
                {email.length > 0 ? (
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                    disabled
                  >
                    Register
                  </button>
                )}
              </div>
            </form>
            <div className="col-sm text-center pt-2">
              <Link to="/signin">Already have an account? Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
