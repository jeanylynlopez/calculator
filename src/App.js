import React, { Component } from 'react';
import './partials/main.css';
import firebase from "firebase";

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
      equation: "",
      value: ""
    }
  }
  componentDidMount(){
    
    dbRef.on("value", (snapshot) => {
      console.log(snapshot.val())
      this.setState({
        // equation: snapshot.val("/equation"),
        // value: snapshot.val("/value")
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Calculator /> 
        <History />
      </div>
    );
  }
}

export default App;
