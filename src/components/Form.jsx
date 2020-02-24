import React from "react";
import Logo from "./bmi.jpg";

const Form = props => {
  return (
    <div>
      <img src={Logo} className="ui fluid image" />
      <form className="ui large form" onSubmit={props.onSubmitHandler}>
        <div className="field">
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            required
            placeholder="Weight in kgs"
            value={props.weight}
            name="weight"
            id="weight"
            onChange={props.onChangeHandler}
          />
        </div>
        <div className="field">
          <label htmlFor="height">Height</label>
          <input
            type="number"
            required
            placeholder="Height in cm"
            value={props.height}
            name="height"
            id="height"
            onChange={props.onChangeHandler}
          />
        </div>
        <button className="ui fluid large teal submit button" id="calculate">
          Calculate BMI
        </button>
      </form>
    </div>
  );
};

export default Form;
