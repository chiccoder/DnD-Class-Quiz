import React from "react";

function Result(props) {
  return (
    <div className="result">
      You should try playing a <strong>{props.quizResult}</strong>!
      <div>
        <button onClick={props.onRestart}>Restart the quiz</button>
      </div>
    </div>
  );
}

export default Result;
