import React from "react";

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        id={props.next}
        value={props.next}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label htmlFor={props.next}>{props.answerContent}</label>
    </li>
  );
}

export default AnswerOption;
