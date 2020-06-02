import React, { Component } from "react";
import { Helmet } from "react-helmet";
import isEmpty from "../../../utils/is-empty";

export default class TakeTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      questions: [],
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
    };
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion,
    mark,
    option
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];

      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
      });
    }
  };

  async componentDidMount() {
    const { slug } = this.props.location.category;

    const url =
      `https://evening-mesa-59655.herokuapp.com/api/mental-conditions/` +
      slug.slug +
      `/questions`;

    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      questions: data.data,
      isLoading: false,
    });

    let {
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
    } = this.state;
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
  }

  render() {
    const { currentQuestion } = this.state;
    const { question, options } = currentQuestion;
    console.log(question);
    console.log(options);

    const { condition } = this.props.location.category;
    return (
      <>
        <Helmet>
          <title>Mind Care | Mental Test</title>
        </Helmet>
        <div className="container" style={{ padding: "100px 16px" }}>
          <div className="col-md-9 mt-3 mb-3 mx-auto">
            <h1 className="h3  text-center font-weight-normal">
              {this.state ? condition.condition + " Test" : "No Test Available"}
            </h1>
            <div className="questions">
              <div className="question-number-container">
                <p>
                  <span className="left">1 of 10</span>
                </p>
              </div>
              <h5>{question}</h5>
              <div className="options-container"></div>

              <div className="button-container">
                <button>Previous</button>
                <button>Next</button>
                <button>Quit</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
