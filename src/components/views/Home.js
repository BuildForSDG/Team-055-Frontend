import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>MindCare | Home</title>
        </Helmet>
        <header id="home">
          <section
            align="center"
            className="text-white"
            style={{ padding: "100px 48px 40px 48px" }}
          >
            <span className="w3-jumbo w3-hide-small">
              Know Your Mental Health Status
            </span>

            <span className="w3-xxlarge w3-hide-large w3-hide-medium">
              Know Your Mental Health Status
            </span>
            <div className="take-test-container">
              <p>
                <Link
                  to="/categories"
                  className="w3-button bg-primary w3-center w3-padding-large w3-large w3-margin-top"
                  style={{ textDecoration: "none", borderRadius: "10px" }}
                >
                  Take a Test
                </Link>
              </p>
            </div>
          </section>
          
        </header>
      </>
    );
  }
}

export default Home;
