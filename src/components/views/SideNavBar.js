import React, { Component } from "react";

import { Link } from "react-router-dom";

export class SideNavBar extends Component {
  render() {
    return (
      <nav
        className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
        style={{ display: this.props.show ? "block" : "none" }}
        id="mySidebar"
      >
        <Link
          to="#"
          className="w3-bar-item w3-button w3-large w3-padding-16"
          onClick={this.props.closed}
        >
          Close x
        </Link>

        <Link
          to="/about"
          className="w3-bar-item w3-button"
          onClick={this.props.closed}
        >
          ABOUT
        </Link>
        <Link
          to="/categories"
          className="w3-bar-item w3-button"
          onClick={this.props.closed}
        >
          MENTAL HEALTH TEST
        </Link>
        <Link
          to="/signup"
          className="w3-bar-item w3-button"
          onClick={this.props.closed}
        >
          SIGN UP
        </Link>
        <Link
          to="/signin"
          className="w3-bar-item w3-button"
          onClick={this.props.closed}
        >
          SIGN IN
        </Link>
      </nav>
    );
  }
}

export default SideNavBar;
