import React, { Component } from 'react';
import './partials/main.css';
import firebase from "./firebase"

// ===============
// COMPONENTS
// ===============
import Calculator from "./components/Calculator";
import History from "./components/History"

// when you see that firebase changes then add stuff to the history list 
// have to figure out how to set the equation and value under componentDidMount 

const dbRef = firebase.database().ref(); 

class App extends Component {

  constructor(){
    super();
    this.state = {
      equation: {},
    }
  }

  componentDidMount(){
    dbRef.on("value", (snapshot) => {
      this.setState({
        equation: snapshot.val(),
      })
    })
  }

  render() {
    return (
      <div className="App wrapper">
        <Calculator /> 
        <History fullEquation={this.state.equation} />
      </div>
    );
  }
}

export default App;
