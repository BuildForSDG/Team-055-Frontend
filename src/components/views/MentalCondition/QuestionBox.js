import React from "react";

const QuestionBox = ({
  question,
  options,
  numberOfQuestions,
  currentQuestionIndex,
  selected,
  prevQuestion,
  nextQuestion,
}) => {
  return (
    <div className="questions">
      <div className="question-number-container">
        <p>
          <span className="left">
            {currentQuestionIndex} of {numberOfQuestions}
          </span>
        </p>
      </div>
      <div className="question">{question}</div>
      <div className="options-container">
        {options
          ? options.map((option) => {
              return (
                <button
                  id={option.id}
                  key={option.id}
                  className="option"
                  onClick={() => {
                    selected(option.mark);
                  }}
                >
                  {option.option}
                </button>
              );
            })
          : "Loading..."}
      </div>
      <div className="button-container">
        <button
          onClick={
            currentQuestionIndex > 1
              ? prevQuestion(currentQuestionIndex - 1)
              : prevQuestion(currentQuestionIndex)
          }
        >
          Previous
        </button>
        <button
          onClick={
            currentQuestionIndex < numberOfQuestions
              ? nextQuestion(currentQuestionIndex + 1)
              : nextQuestion(numberOfQuestions)
          }
        >
          Next
        </button>
      </div>
    </div>
    
  );
};

export default QuestionBox;
