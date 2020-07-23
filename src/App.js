import React, { Component } from "react";
import SubApp from "./subApp";
import AddNinja from "./AddNinja";
class App extends Component {
  //* This is the state of the App
  state = {
    ninjas: [
      { name: "John", age: 27, belt: "black", id: 1 },
      { name: "Ryan", age: 18, belt: "orange", id: 2 },
      { name: "Andrew", age: 16, belt: "white", id: 3 },
    ],
  };
  ninjasChange = (ninja) => {
    ninja.id = Math.random()*10;
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
     ninjas: ninjas
    });
  };
  deleteNinja = (id) =>{
    let ninjas = this.state.ninjas.filter((ninja)=>{
      return (ninja.id !== id)
    })
    this.setState({
      ninjas:ninjas,
    })
  }
  //* This is the root element of the react APP
  render() {
    return (
      <div className="App">
        <h1>Hello This is my first app</h1>
        <p>This is an aphelp</p>
        <AddNinja ninjasChange = {this.ninjasChange} />
        <SubApp ninjaprop={this.state.ninjas} deleteNinja = {this.deleteNinja}/>
      </div>
    );
  }
}

export default App;
