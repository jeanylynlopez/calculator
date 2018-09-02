import React, { Component } from "react" 

class History extends Component {

    constructor(){
        super();
        this.state = {
            // historySelected: false,
            // historyClass: ""
        }
    }
    
    render(){
        return(
            <div>
                <ul className={`${this.props.historyClass}`}>
                    {Object.entries(this.props.fullEquation).map((equation) => {
                        return (
                            <li key={equation}>{`${equation[1].equation} = ${equation[1].value}`}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default History;