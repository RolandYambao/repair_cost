import React, { Component } from 'react';

class DisplayRepair extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container is-max-desktop">
                <div className="column is-4">
                    <div className="card large" id="submitCard">
                        <article>
                            <h1>Submit Repair Estimate</h1>
                            <p>Total Cost of Repair</p>
                            <h1 id="answer">$</h1>
                            <h2 className="subtitle" id="totalCostEach">Total Material Cost: $</h2>
                            <h2 className="subtitle" id="totalCostEach">Total Labor Cost: $</h2>
                            <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: $</h2>
                            <input type="text" className="userInput" id="nameInput" placeholder="Estimate Cost Name"></input><br />
                            <input type="file" className="userInput" id="pictureInput" /><br />
                            <button id="submitButton">Submit</button>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayRepair;