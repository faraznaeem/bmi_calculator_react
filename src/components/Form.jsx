import React from "react";

const Form = (props) => {
  return (
    <form>
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        name="weight"
        required
        placeholder="Weight in kgs"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="height in cm"
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button>Calculate BMI</button>
    </form>
  );
};
export default Form;
