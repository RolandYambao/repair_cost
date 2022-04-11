import './CalculateRepair.css';
import React, { Component } from 'react';

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
        }
    }

    handleAdditionMaterialSubmit(e) {
        this.state.cost = parseInt(this.state.cost) + parseInt(this.state.materialCost);
        totalMaterialCost = totalMaterialCost + parseInt(this.state.materialCost);
        this.setState({
            cost: this.state.cost,
        })
    }
    handleMaterialCost(e) {
        this.setState({
            materialCost: e.target.value,
        })
    }
    handleSubtractionMaterialSubmit(e) {
        this.state.cost = parseInt(this.state.cost) - parseInt(this.state.materialCost);
        totalMaterialCost = totalMaterialCost - parseInt(this.state.materialCost);
        this.setState({
            cost: this.state.cost,
        })
    }


    handleAdditionLaborSubmit(e) {
        this.state.cost = parseInt(this.state.cost) + parseInt(this.state.laborCost);
        totalLaborCost = totalLaborCost + parseInt(this.state.laborCost);
        this.setState({
            cost: this.state.cost,
        })
    }
    handleLaborCost(e) {
        this.setState({
            laborCost: e.target.value,
        })
    }
    handleSubtractionLaborSubmit(e) {
        this.state.cost = parseInt(this.state.cost) - parseInt(this.state.laborCost);
        totalLaborCost = totalLaborCost - parseInt(this.state.laborCost);
        this.setState({
            cost: this.state.cost,
        })
    }


    handleAdditionMiscSubmit(e) {
        this.state.cost = parseInt(this.state.cost) + parseInt(this.state.miscCost);
        totalMiscCost = totalMiscCost + parseInt(this.state.miscCost);
        this.setState({
            cost: this.state.cost,
        })
    }
    handleMiscCost(e) {
        this.setState({
            miscCost: e.target.value,
        })
    }
    handleSubtractionMiscSubmit(e) {
        this.state.cost = parseInt(this.state.cost) - parseInt(this.state.miscCost);
        totalMiscCost = totalMiscCost - parseInt(this.state.miscCost);
        this.setState({
            cost: this.state.cost,
        })
    }

    render() {
        if (parseInt(this.state.cost) < 0) {
            this.state.cost = 0;
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
        if (isNaN(this.state.materialCost) == true) {
            this.state.materialCost = 0;
        }
        if (isNaN(this.state.laborCost) == true) {
            this.state.laborCost = 0;
        }
        if (isNaN(this.state.miscCost) == true) {
            this.state.miscCost = 0;
        }
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="https://bulma.io">
                                <img src="https://bulma.io/images/bulma-logo.png" alt="placeholder" width="112" height="28" />
                            </a>

                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-end">
                                <a className="navbar-item"> Tag </a>
                                <a className="navbar-item"> Author </a>
                                <a className="navbar-item"> Style Guide </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="hero is-medium">
                    <div className="hero-body has-text-centered">
                        <h1 className="title is-2">Total Cost of Repair</h1>
                        <h1 id="answer">${this.state.cost}</h1>
                    </div>
                </section>
                <div className="container is-max-desktop">
                    <section className="featured">
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <h2 className="subtitle">Create Estimate to Repair Cost</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="columns">
                        <div className="column is-4">
                            <div className="card large">
                                <article>
                                    <figure className="image is-5by3">
                                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" alt="placeholder" />
                                    </figure>
                                    <br />
                                    <button className="controls" id="plus" onClick={this.handleAdditionMaterialSubmit.bind(this)}>+</button>
                                    <input type="number" className="controls" id="input" placeholder="0" value={this.state.materialCost} onChange={this.handleMaterialCost.bind(this)} />
                                    <button className="controls" id="minus" onClick={this.handleSubtractionMaterialSubmit.bind(this)}>-</button>
                                    <h2 className="subtitle">Material Cost: ${totalMaterialCost}</h2>
                                </article>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card large">
                                <article>
                                    <figure className="image is-5by3">
                                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" alt="placeholder" />
                                    </figure>
                                    <br />
                                    <button className="controls" id="plus" onClick={this.handleAdditionLaborSubmit.bind(this)}>+</button>
                                    <input type="number" className="controls" id="input" placeholder="0" value={this.state.laborCost} onChange={this.handleLaborCost.bind(this)} />
                                    <button className="controls" id="minus" onClick={this.handleSubtractionLaborSubmit.bind(this)}>-</button>
                                    <h2 className="subtitle">Labor Cost: ${totalLaborCost}</h2>
                                </article>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card large">
                                <article>
                                    <figure className="image is-5by3">
                                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" alt="placeholder" />
                                    </figure>
                                    <br />
                                    <button className="controls" id="plus" onClick={this.handleAdditionMiscSubmit.bind(this)}>+</button>
                                    <input type="number" className="controls" id="input" placeholder="0" value={this.state.miscCost} onChange={this.handleMiscCost.bind(this)} />
                                    <button className="controls" id="minus" onClick={this.handleSubtractionMiscSubmit.bind(this)}>-</button>
                                    <h2 className="subtitle">Misc. Cost: ${totalMiscCost}</h2>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalculateRepair;