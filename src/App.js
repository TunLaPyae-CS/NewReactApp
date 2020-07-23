import React, { Component } from "react";
import SubApp from "./subApp";
class App extends Component {
  state = {
    ninjas: [
      { name: "John", age: 27, belt: "black", id: 1 },
      { name: "Ryan", age: 18, belt: "orange", id: 2 },
      { name: "Andrew", age: 16, belt: "white", id: 3 },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>Hello This is my first app</h1>
        <p>This is an aphelp</p>
        <SubApp ninjaprop={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
