import React, { Component } from "react";
import { Helmet } from "react-helmet";

export class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: "",
      score: 0,
      numberOfQuestions: 0,
      totalAssignedScore: 0,
      percentageScore: 0,
      level: "",
      recommendation: "",
    };
  }
  componentDidMount() {
    const { state } = this.props.location;

    if (state) {
      this.setState({
        condition: state.condition,
        score: state.score,
        numberOfQuestions: state.numberOfQuestions,
        totalAssignedScore: state.totalAssignedScore,
        percentageScore: state.percentageScore,
        level: state.level,
        recommendation: state.recommendation,
      });
    }
  }
  render() {
    const { state } = this.props.location;

    let stats;
    if (state !== undefined) {
      stats = (
        <div className="container" style={{ padding: "100px 16px" }}>
          <div className="col-md-9 mt-3 mb-3 mx-auto">
            <h1 className="h3  text-center font-weight-normal">
              Result: {this.state.level} of {this.state.condition}
            </h1>

            <p className="text-center">{this.state.recommendation}</p>

            <div className="row" style={{}} align="center">
              <div className="card mb-2 mr-2 ml-2" style={{ minWidth: 400 }}>
                <div className="card-body text-center">
                  <h5 className="card-title">
                    Your total score was {this.state.score} out of{" "}
                    {this.state.totalAssignedScore}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      stats = (
        <h1 style={{ paddingTop: 100 }}>
          No Stats available. Please take a quiz.
        </h1>
      );
    }
    return (
      <>
        <Helmet>
          <title>MindCare | Mental Test Result</title>
        </Helmet>
        {stats}
      </>
    );
  }
}

export default Result;
