import React, { Component } from "react";
import dragon from "./dragon.png";
import "./App.css";
import Quiz from "./components/Quiz";
import quizQuestions from "./api/quizQuestions";
import quizResults from "./api/quizResults";
import Result from "./components/Result";

const initialState = {
  questionId: "Q1",
  question: quizQuestions["Q1"].question,
  answerOptions: quizQuestions["Q1"].answers,
  answer: "",
  result: "",
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  restart = () => {
    this.setState(initialState);
  };

  setNextQuestion() {
    const next = this.state.answer;
    if (next.startsWith("Q")) {
      const nextQuestion = quizQuestions[next];
      this.setState({
        questionId: next,
        question: nextQuestion.question,
        answerOptions: nextQuestion.answers,
        answer: "",
      });
    } else if (next.startsWith("R")) {
      const result = quizResults[next].result;
      this.setState({ result });
    }
  }

  setUserAnswer(answer) {
    this.setState({
      answer: answer,
    });
  }

  handleAnswerSelected = (event) => {
    this.setUserAnswer(event.currentTarget.value);
    setTimeout(() => this.setNextQuestion(), 300);
  };

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} onRestart={this.restart} />;
  }

  render() {
    return (
      <div className="App">
        <div className="">
          <img src={dragon} alt="logo" />
          <h1>What class should you play in Dungeons and Dragons?</h1>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
