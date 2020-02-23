import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            name="weight"
            required
            placeholder="Weight in kgs"
            id="weight"
          />
          <label htmlFor="height">Height</label>
          <input
            type="number"
            required
            placeholder="height in cm"
            name="height"
            id="height"
          />
          <button>Calculate BMI</button>
        </form>
      </div>
    );
  }
}
export default App;
