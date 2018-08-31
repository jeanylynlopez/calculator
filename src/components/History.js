import React, { Component } from "react" 

class History extends Component {
    
    render(){
        return(
            <div>
                <h2 className="historyTitle wrapper">History</h2>
                <ul>
                    {Object.entries(this.props.fullEquation).map((equation) => {
                        // console.log(equation);
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