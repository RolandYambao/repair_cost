import './CalculateRepair.css';
import React, { Component } from 'react';
import NewRepair from "./NewRepair";

let totalMaterialCost = 0;
let totalLaborCost = 0;
let totalMiscCost = 0;

class CalculateRepair extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cost: 0,
            materialCost: 0,
            laborCost: 0,
            miscCost: 0,
            submissions: [],
        }
    }

    handleAdditionMaterialSubmit() {
        totalMaterialCost = totalMaterialCost + parseFloat(this.state.materialCost);
        this.setState({
            cost: parseFloat(this.state.cost) + parseFloat(this.state.materialCost),
        })
    }
    handleMaterialCost(e) {
        this.setState({
            materialCost: e.target.value,
        })
    }
    handleSubtractionMaterialSubmit() {
        totalMaterialCost = totalMaterialCost - parseFloat(this.state.materialCost);
        this.setState({
            cost: parseFloat(this.state.cost) - parseFloat(this.state.materialCost),
        })
    }


    handleAdditionLaborSubmit() {
        totalLaborCost = totalLaborCost + parseFloat(this.state.laborCost);
        this.setState({
            cost: parseFloat(this.state.cost) + parseFloat(this.state.laborCost),
        })
    }
    handleLaborCost(e) {
        this.setState({
            laborCost: e.target.value,
        })
    }
    handleSubtractionLaborSubmit() {
        totalLaborCost = totalLaborCost - parseFloat(this.state.laborCost);
        this.setState({
            cost: parseFloat(this.state.cost) - parseFloat(this.state.laborCost),
        })
    }

    handleAdditionMiscSubmit() {
        totalMiscCost = totalMiscCost + parseFloat(this.state.miscCost);
        this.setState({
            cost: parseFloat(this.state.cost) + parseFloat(this.state.miscCost),
        })
    }
    handleMiscCost(e) {
        this.setState({
            miscCost: e.target.value,
        })
    }
    handleSubtractionMiscSubmit() {
        totalMiscCost = totalMiscCost - parseFloat(this.state.miscCost);
        this.setState({
            cost: parseFloat(this.state.cost) - parseFloat(this.state.miscCost),
        })
    }


    handleEstimateName(e) {
        e.preventDefault();
        this.setState({
            estimateName: e.target.value,
        })
    }
    handleTotalCost(e) {
        e.preventDefault();
        this.setState({
            cost: e.target.value,
        })
    }
    handleMaterialCostFinal(e) {
        e.preventDefault();
        this.setState({
            materialCost: totalMaterialCost,
        })
    }
    handleLaborCostFinal(e) {
        e.preventDefault();
        this.setState({
            laborCost: totalLaborCost,
        })
    }
    handleMiscCostFinal(e) {
        e.preventDefault();
        this.setState({
            miscCost: totalMiscCost,
        })
    }

    handleFullSubmission(e) {
        e.preventDefault();
        let repairData = {
            estimateName: this.state.estimateName,
            cost: parseFloat(this.state.cost).toFixed(2),
            materialCost: parseFloat(totalMaterialCost).toFixed(2),
            laborCost: parseFloat(totalLaborCost).toFixed(2),
            miscCost: parseFloat(totalMiscCost).toFixed(2),
        }
        const repairArray = this.state.submissions.slice();
        repairArray.push(repairData);
        this.setState({
            submissions: repairArray,
        })
        console.log(repairData);
    }

    handleEdits(e) {
        e.preventDefault();
        this.setState({
            estimateName: this.state.estimateName,
            cost: (parseFloat(totalMaterialCost) + parseFloat(totalLaborCost) + parseFloat(totalMiscCost)).toFixed(2),
            materialCost: parseFloat(totalMaterialCost).toFixed(2),
            laborCost: parseFloat(totalLaborCost).toFixed(2),
            miscCost: parseFloat(totalMiscCost).toFixed(2),
        })
    }

    displaySubmissions() {
        const displaySubmissions = this.state.submissions.map((a, idx) => {
            return (
                <NewRepair key={idx} estimateName={a.estimateName}
                    cost={a.cost} materialCost={a.materialCost}
                    laborCost={a.laborCost} miscCost={a.miscCost}
                />
            )
        });
        return displaySubmissions;
    }

    render() {
        if (parseFloat(this.state.cost).toFixed(2) < 0) {
            this.setState({
                cost: 0,
            })
        }
        if (totalMaterialCost < 0) {
            totalMaterialCost = 0;
        }
        if (totalLaborCost < 0) {
            totalLaborCost = 0;
        }
        if (totalMiscCost < 0) {
            totalMiscCost = 0;
        }
        if (isNaN(this.state.materialCost) === true) {
            this.setState({
                materialCost: 0
            })
        }
        if (isNaN(this.state.laborCost) === true) {
            this.setState({
                laborCost: 0
            })
        }
        if (isNaN(this.state.miscCost) === true) {
            this.setState({
                miscCost: 0
            })
        }
        return (
            <div>
                <section className="hero is-medium" id="totalRepairCost">
                    <div className="hero-body has-text-centered">
                        <h1 className="title is-2" id="totalCost">Total Cost of Repair</h1>
                        <h1 id="answer">${parseFloat(this.state.cost).toFixed(2)}</h1>
                    </div>
                </section>
                <div className="container is-max-desktop">
                    <section className="featured">
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <h2 className="subtitle" id="createEstimate">Create Estimate of Repair Cost</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="columns">
                        <div className="column is-4">
                            <div className="card large">
                                <article>
                                    <h1>Material Cost</h1>
                                    <figure className="image is-5by3">
                                        <img src="https://i.imgur.com/f90xBtO.jpeg" alt="repairMaterials" id="costPicture" />
                                    </figure>
                                    <br />
                                    <button className="controls" id="plus" onClick={this.handleAdditionMaterialSubmit.bind(this)}>+</button>
                                    <input type="number" step=".01" min="0" className="controls" id="input" placeholder="0" value={this.state.materialCost} onChange={this.handleMaterialCost.bind(this)} />
                                    <button className="controls" id="minus" onClick={this.handleSubtractionMaterialSubmit.bind(this)}>-</button>
                                    <h2 className="subtitle" id="totalCostEach">Total Material Cost: ${parseFloat(totalMaterialCost).toFixed(2)}</h2>
                                </article>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card large">
                                <article>
                                    <h1>Labor Cost</h1>
                                    <figure className="image is-5by3">
                                        <img src="https://i.imgur.com/DbJbePf.jpeg" alt="constructionWorker" id="costPicture" />
                                    </figure>
                                    <br />
                                    <button className="controls" id="plus" onClick={this.handleAdditionLaborSubmit.bind(this)}>+</button>
                                    <input type="number" step=".01" min="0" className="controls" id="input" placeholder="0" value={this.state.laborCost} onChange={this.handleLaborCost.bind(this)} />
                                    <button className="controls" id="minus" onClick={this.handleSubtractionLaborSubmit.bind(this)}>-</button>
                                    <h2 className="subtitle" id="totalCostEach">Total Labor Cost: ${parseFloat(totalLaborCost).toFixed(2)}</h2>
                                </article>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card large">
                                <article>
                                    <h1>Misc. Cost</h1>
                                    <figure className="image is-5by3">
                                        <img src="https://i.imgur.com/qeyzYmG.jpeg" alt="warningSign" id="costPicture" />
                                    </figure>
                                    <br />
                                    <button className="controls" id="plus" onClick={this.handleAdditionMiscSubmit.bind(this)}>+</button>
                                    <input type="number" step=".01" min="0" className="controls" id="input" placeholder="0" value={this.state.miscCost} onChange={this.handleMiscCost.bind(this)} />
                                    <button className="controls" id="minus" onClick={this.handleSubtractionMiscSubmit.bind(this)}>-</button>
                                    <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: ${parseFloat(totalMiscCost).toFixed(2)}</h2>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="column is-full">
                        <div className="card large" id="submitCard">
                            <form onSubmit={this.handleFullSubmission.bind(this)}>
                                <h1>Submit Repair Estimate</h1> <br />
                                <span className="subtitle" id="submitTotalCostEach1" >Total Cost of Repair: </span>$
                                <input type="number" value={parseFloat(this.state.cost).toFixed(2)} onChange={this.handleTotalCost.bind(this)}></input><br /><br />

                                <span className="subtitle" id="submitTotalCostEach2">Total Material Cost: </span>$
                                <input type="number" value={parseFloat(totalMaterialCost).toFixed(2)} onChange={this.handleMaterialCostFinal.bind(this)}></input><br /><br />

                                <span className="subtitle" id="submitTotalCostEach3">Total Labor Cost: </span>$
                                <input type="number" value={parseFloat(totalLaborCost).toFixed(2)} onChange={this.handleLaborCostFinal.bind(this)}></input><br /><br />

                                <span className="subtitle" id="submitTotalCostEach4">Total Misc. Cost: </span>$
                                <input type="number" value={parseFloat(totalMiscCost).toFixed(2)} onChange={this.handleMiscCostFinal.bind(this)}></input><br /><br />

                                <input type="text" className="userInput" id="nameInput" placeholder="Estimate Cost Name" value={this.state.estimateName} onChange={this.handleEstimateName.bind(this)}></input><br /><br />
                                <button id="submitButton">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section">
                        <div className="row columns is-multiline">
                            {this.displaySubmissions()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalculateRepair;