import React, { Component } from 'react';

class NewRepair extends Component {

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

    render() {
        return (
            <div className="column is-4">
                <figure>
                    <img id="machineLogo" src="https://i.imgur.com/xQfwpjq.jpg" style={{ width: '125px', height: '125px' }} alt="RepairCoLogo" />
                </figure>
                <div className="card large" id="dataBox">
                    <form>
                        <h1>{this.props.counter}</h1>
                        <h1 id="estimateName">{this.props.estimateName}</h1>
                        <p>Total Cost of Repair</p>
                        <h1 id="newAnswer">${this.props.cost}</h1>
                        <h2 className="subtitle" id="totalCostEach">Total Material Cost: ${this.props.materialCost}</h2>
                        <h2 className="subtitle" id="totalCostEach">Total Labor Cost: ${this.props.laborCost}</h2>
                        <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: ${this.props.miscCost}</h2>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewRepair;