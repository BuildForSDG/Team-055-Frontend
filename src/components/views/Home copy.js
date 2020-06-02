import React, { Component } from "react";

import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <header
        className="bgimg-1 w3-display-container  w3-grayscale-min"
        id="home"
      >
        <div
          className="w3-display-left w3-text-white"
          style={{ padding: "48px" }}
        >
          <span className="w3-jumbo w3-hide-small">
            Know Your Mental Health Status
          </span>
          <br />
          <span className="w3-xxlarge w3-hide-large w3-hide-medium">
            Know Your Mental Health Status
          </span>
          <br />

          <p align="center">
            <Link
              to="/signIn"
              className="w3-button bg-primary w3-center w3-padding-large w3-large w3-margin-top  w3-hover-opacity-off"
              style={{ textDecoration: "none" }}
            >
              Take a Test
            </Link>
          </p>
        </div>
      </header>
    );
  }
}

export default Home;
