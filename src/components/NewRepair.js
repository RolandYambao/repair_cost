import React, { Component } from 'react';

class NewRepair extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: [],
        }
    }

    handleEstimateName(e) {
        e.preventDefault();
        this.setState({
            estimateName: e.target.value,
        })
    }
    handleMaterialCostFinal(e) {
        e.preventDefault();
        this.setState({
            materialCost: e.target.value,
        })
    }
    handleLaborCostFinal(e) {
        e.preventDefault();
        this.setState({
            laborCost: e.target.value,
        })
    }
    handleMiscCostFinal(e) {
        e.preventDefault();
        this.setState({
            miscCost: e.target.value,
        })
    }
    handleEdits(e) {
        e.preventDefault();
        if (this.state.estimateName === undefined) {
            document.getElementById("estimateName").textContent = "";
        } else {
            document.getElementById("estimateName").textContent = this.state.estimateName;
        }

        document.getElementById("newAnswer").textContent = "$" + (parseFloat(this.state.materialCost) + parseFloat(this.state.laborCost) + parseFloat(this.state.miscCost)).toFixed(2);

        if (this.state.materialCost === undefined) {
            document.getElementById("totalCostEach1").textContent = "Total Material Cost: $0.00";
        } else {
            document.getElementById("totalCostEach1").textContent = "Total Material Cost: $" + parseFloat(this.state.materialCost).toFixed(2);
        }

        if (this.state.laborCost === undefined) {
            document.getElementById("totalCostEach2").textContent = "Total Labor Cost: $0.00";
        } else {
            document.getElementById("totalCostEach2").textContent = "Total Labor Cost: $" + parseFloat(this.state.laborCost).toFixed(2);
        }

        if (this.state.miscCost === undefined) {
            document.getElementById("totalCostEach3").textContent = "Total Misc. Cost: $0.00";
        } else {
            document.getElementById("totalCostEach3").textContent = "Total Misc. Cost: $" + parseFloat(this.state.miscCost).toFixed(2)
        }
    }

    render() {
        return (
            <div className="column is-4">
                <div className="card large">
                    <article>
                        <h1 id="estimateName">{this.props.estimateName}</h1>
                        <p>Total Cost of Repair</p>
                        <h1 id="newAnswer">${this.props.cost}</h1>
                        <h2 className="subtitle" id="totalCostEach1">Total Material Cost: ${this.props.materialCost}</h2>
                        <h2 className="subtitle" id="totalCostEach2">Total Labor Cost: ${this.props.laborCost}</h2>
                        <h2 className="subtitle" id="totalCostEach3">Total Misc. Cost: ${this.props.miscCost}</h2>
                    </article>
                    <form onSubmit={this.handleEdits.bind(this)}>
                        <input type="text" className="userInput" id="nameInput" placeholder="Edit Repair Estimation Name" value={this.state.estimateName} onChange={this.handleEstimateName.bind(this)}></input><br /><br />
                        <input type="number" placeholder="Edit Material Cost" value={parseFloat(this.state.materialCost).toFixed(2)} onChange={this.handleMaterialCostFinal.bind(this)}></input><br /><br />
                        <input type="number" placeholder="Edit Labor Cost" value={parseFloat(this.state.laborCost).toFixed(2)} onChange={this.handleLaborCostFinal.bind(this)}></input><br /><br />
                        <input type="number" placeholder="Edit Misc. Name" value={parseFloat(this.state.miscCost).toFixed(2)} onChange={this.handleMiscCostFinal.bind(this)}></input><br /><br />
                        <button id="submitButton">Edit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewRepair;