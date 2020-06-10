import React, { Component } from "react";
import { Helmet } from "react-helmet";

export class About extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>MindCare | About</title>
        </Helmet>
        <div id="about" className="container" style={{ padding: "100px 16px" }}>
          <div className=" col-md-9 mt-3 mb-3 mx-auto">
            <h1 className="h3 text-center font-weight-normal w3-padding">
              About MindCare
            </h1>
            <h3 className="h4 text-left font-weight-normal">
              What is MindCare?
            </h3>
            <p>
              MindCare is a solution to help find innovative ways that can link
              mental health specialists to our community.
            </p>
            <p>
              MindCare is designed to serve as a means to test users’ mental
              health status and connect them to available mental health experts
              and hospitals close by in the community thereby promoting healthy
              lifestyle and preventive measures against mental health illnesses.
            </p>
            <h3 className="h4 text-left font-weight-normal">
              How to use MindCare
            </h3>
            <p>
              You selecting a test from one of the available mental health
              issues
            </p>
            <p>
              The test are less than 5 minutes and will try to give you a
              descriptive results based on your answer
            </p>
            <p>
              You can easily connect to the mental experts that are readily
              available to help you.
            </p>
            <p>
              MindCare is simple yet can serve as a fun innovative way to get
              user description to the experts and the user can also learn about
              preventives measure to take at home.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About;
