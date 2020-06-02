import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import mindCareLogo from "../../assets/images/mindcare_logo.jpg";

export class TopNavBar extends Component {
  render() {
    return (
      <div className="w3-top">
        <div className="w3-bar w3-container w3-white w3-card" id="myNavbar">
          <NavLink
            activeClassName="active"
            to="/"
            className="w3-bar-item w3-button w3-wide"
            style={{ textDecoration: "none" }}
          >
            <span>
              <img src={mindCareLogo} width="15" alt="logo" />
            </span>
            {"  "}
            MINDCARE
          </NavLink>

          <div className="w3-right  w3-hide-small">
            <NavLink
              activeClassName="active"
              to="/about"
              className="w3-bar-item w3-button"
              style={{ textDecoration: "none" }}
            >
              ABOUT
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/categories"
              className="w3-bar-item w3-button"
              style={{ textDecoration: "none" }}
            >
              MENTAL HEALTH TEST
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/signup"
              className="w3-bar-item w3-button"
              style={{ textDecoration: "none" }}
            >
              SIGN UP
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/signin"
              className="w3-bar-item w3-button"
              style={{ textDecoration: "none" }}
            >
              SIGN IN
            </NavLink>
          </div>

          <NavLink
            activeClassName="active"
            to="#"
            className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onClick={this.props.toggleSidebar}
          >
            <i className="fa fa-bars"></i>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default TopNavBar;
