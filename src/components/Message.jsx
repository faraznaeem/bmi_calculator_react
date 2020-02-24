import React from "react";

const Message = props => {
  let messageColor;
  if (props.bmiMessage == "Normal") {
    messageColor = "green";
  } else {
    messageColor = "red";
  }

  return (
    <div className="ui center aligned grid">
      <br/>
      <p className={`ui ${messageColor} massive message `} id="bmi-message">
        You are {props.bmiMessage} with a BMI of {props.bmiValue}
      </p>
    </div>
  );
};

export default Message;
