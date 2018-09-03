import React, { Component } from 'react';
import './partials/main.css';
import firebase from "./firebase"
import flip from './syncAltSolid.svg';
import ellipsis from './ellipsisHSolid.svg';

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
      historySelected: false,
      historyClass: "hide",
      relativeClass: "",
      flipSelected: false,
      flipClass: ""
    }
  }

  componentDidMount(){
    dbRef.on("value", (snapshot) => {
      this.setState({
        equation: snapshot.val(),
      })
    })
  }

  toggleHistory = (e) => {
    e.preventDefault();
    
    if (this.state.historySelected === false){
      this.setState({
        historySelected: true,
        historyClass: "history",
        relativeClass: "relative"
        
      })
    } else {
      this.setState({
        historySelected: false,
        historyClass: "hide",
      })
    }
  }

  toggleFlip = (e) => {
    e.preventDefault();

    if(this.state.flipSelected === false){
      this.setState({
        flipSelected: true,
        flipClass: "transition"
      }) 
    } else {
      this.setState({
        flipSelected: false,
        flipClass: ""
      })
    }
  }


  render() {
    return (
      <div className={`App wrapper ${this.state.relativeClass} `}>
        <header>
        <h1 className="title">Calculator</h1>
        <Calculator flipClass={this.state.flipClass}/> 
        <div className="toggleButton">
          <button onClick={this.toggleHistory} className="ellipsisButton">
            {/* <span className="animatedDots">...</span> */}
            <span className="animatedDots"><img src={ellipsis} alt="" /></span>
            {/* <img src={ellipsis} alt="" /> */}
          </button>
          <button onClick={this.toggleFlip} className="flipButton"><img src={flip} alt="" /></button>
        </div>
        <History fullEquation={this.state.equation} historyClass={this.state.historyClass} />
        </header>
      </div>
    );
  }
}

export default App;
