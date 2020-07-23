import React, { Component } from "react";

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  };
  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleButtonSubmit = (e) => {
    e.preventDefault();
    this.props.ninjasChange(this.state);
  };
  
  render() {
    return (
      <div className="addNinjaRoot" id="some">
        <form onSubmit={this.handleButtonSubmit}>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" onChange={this.handleInputChange} />
          <label htmlFor="age">Age : </label>
          <input type="text" id="age" onChange={this.handleInputChange} />
          <label htmlFor="belt">Belt : </label>
          <input type="text" id="belt" onChange={this.handleInputChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddNinja;
