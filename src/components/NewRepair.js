import React, { Component } from 'react';

class NewRepair extends Component {

    render() {
        return (
            <div className="column is-4">
                <div className="card large">
                    <article>
                        <h1>{this.props.estimateName}</h1>
                        <p>Total Cost of Repair</p>
                        <h1 id="newAnswer">${this.props.cost}</h1>
                        <h2 className="subtitle" id="totalCostEach">Total Material Cost: ${this.props.materialCost}</h2>
                        <h2 className="subtitle" id="totalCostEach">Total Labor Cost: ${this.props.laborCost}</h2>
                        <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: ${this.props.miscCost}</h2>
                    </article>
                </div>
            </div>
        );
    }
}

export default NewRepair;