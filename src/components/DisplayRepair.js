import React, { Component } from 'react';

class DisplayRepair extends Component {

    render() {
        return (
            <div className="container">
                <div id="greyTape">All Repair Estimations (Hard Coded Display)</div>
                <div className="container">
                    <div className="section">
                        <div className="row columns is-multiline">
                            <div className="column is-half">
                                <div className="card large" id="submitCard">
                                    <h1>Edit Feature</h1>
                                    <form >
                                        <input type="number" placeholder="Index Number" ></input><br />
                                        <input type="text" className="userInput" id="nameInput" placeholder="Edit Broken Entity Name" ></input><br />
                                        <input type="number" placeholder="Edit Material Cost" ></input><br />
                                        <input type="number" placeholder="Edit Labor Cost" ></input><br />
                                        <input type="number" placeholder="Edit Misc. Cost" ></input><br />
                                        <button id="submitButton">Edit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="card large" id="submitCard">
                                    <br /><br />
                                    <h1>Delete Feature</h1>
                                    <form >
                                        <input type="number" placeholder="Index Number"></input><br />
                                        <button id="submitButton">Delete</button>
                                    </form>
                                    <br /><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="row columns is-multiline">
                        <div className="column is-4">
                            <figure>
                                <img id="machineLogo" src="https://i.imgur.com/xQfwpjq.jpg" style={{ width: '125px', height: '125px' }} alt="RepairCoLogo" />
                            </figure>
                            <div className="card large" id="dataBox">
                                <form>
                                    <h1>1</h1>
                                    <h1>Hole in the Wall</h1>
                                    <p>Total Cost of Repair</p>
                                    <h1 id="newAnswer">$600</h1>
                                    <h2 className="subtitle" id="totalCostEach">Total Material Cost: $200</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Labor Cost: $300</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: $100</h2>
                                </form>
                            </div>
                        </div>
                        <div className="column is-4">
                            <figure>
                                <img id="machineLogo" src="https://i.imgur.com/xQfwpjq.jpg" style={{ width: '125px', height: '125px' }} alt="RepairCoLogo" />
                            </figure>
                            <div className="card large" id="dataBox">
                                <form>
                                    <h1>2</h1>
                                    <h1>Burned Roof</h1>
                                    <p>Total Cost of Repair</p>
                                    <h1 id="newAnswer">$450</h1>
                                    <h2 className="subtitle" id="totalCostEach">Total Material Cost: $100</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Labor Cost: $300</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: $50</h2>
                                </form>
                            </div>
                        </div>
                        <div className="column is-4">
                            <figure>
                                <img id="machineLogo" src="https://i.imgur.com/xQfwpjq.jpg" style={{ width: '125px', height: '125px' }} alt="RepairCoLogo" />
                            </figure>
                            <div className="card large" id="dataBox">
                                <form>
                                    <h1>3</h1>
                                    <h1>Broken Pipe</h1>
                                    <p>Total Cost of Repair</p>
                                    <h1 id="newAnswer">$65</h1>
                                    <h2 className="subtitle" id="totalCostEach">Total Material Cost: $10</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Labor Cost: $50</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: $5</h2>
                                </form>
                            </div>
                        </div>
                        <div className="column is-4">
                            <figure>
                                <img id="machineLogo" src="https://i.imgur.com/xQfwpjq.jpg" style={{ width: '125px', height: '125px' }} alt="RepairCoLogo" />
                            </figure>
                            <div className="card large" id="dataBox">
                                <form>
                                    <h1>4</h1>
                                    <h1>Rusty Fence</h1>
                                    <p>Total Cost of Repair</p>
                                    <h1 id="newAnswer">$240</h1>
                                    <h2 className="subtitle" id="totalCostEach">Total Material Cost: $150</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Labor Cost: $75</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: $15</h2>
                                </form>
                            </div>
                        </div>
                        <div className="column is-4">
                            <figure>
                                <img id="machineLogo" src="https://i.imgur.com/xQfwpjq.jpg" style={{ width: '125px', height: '125px' }} alt="RepairCoLogo" />
                            </figure>
                            <div className="card large" id="dataBox">
                                <form>
                                    <h1>5</h1>
                                    <h1>Inoperable Toaster</h1>
                                    <p>Total Cost of Repair</p>
                                    <h1 id="newAnswer">$85</h1>
                                    <h2 className="subtitle" id="totalCostEach">Total Material Cost: $25</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Labor Cost: $50</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: $10</h2>
                                </form>
                            </div>
                        </div>
                        <div className="column is-4">
                            <figure>
                                <img id="machineLogo" src="https://i.imgur.com/xQfwpjq.jpg" style={{ width: '125px', height: '125px' }} alt="RepairCoLogo" />
                            </figure>
                            <div className="card large" id="dataBox">
                                <form>
                                    <h1>6</h1>
                                    <h1>Flat Tire</h1>
                                    <p>Total Cost of Repair</p>
                                    <h1 id="newAnswer">$105</h1>
                                    <h2 className="subtitle" id="totalCostEach">Total Material Cost: $50</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Labor Cost: $25</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: $30</h2>
                                </form>
                            </div>
                        </div>
                        <div className="column is-4">
                            <figure>
                                <img id="machineLogo" src="https://i.imgur.com/xQfwpjq.jpg" style={{ width: '125px', height: '125px' }} alt="RepairCoLogo" />
                            </figure>
                            <div className="card large" id="dataBox">
                                <form>
                                    <h1>7</h1>
                                    <h1>Unworking Motor</h1>
                                    <p>Total Cost of Repair</p>
                                    <h1 id="newAnswer">$65</h1>
                                    <h2 className="subtitle" id="totalCostEach">Total Material Cost: $10</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Labor Cost: $50</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: $5</h2>
                                </form>
                            </div>
                        </div>
                        <div className="column is-4">
                            <figure>
                                <img id="machineLogo" src="https://i.imgur.com/xQfwpjq.jpg" style={{ width: '125px', height: '125px' }} alt="RepairCoLogo" />
                            </figure>
                            <div className="card large" id="dataBox">
                                <form>
                                    <h1>8</h1>
                                    <h1>Dish Washer Malfunctioning</h1>
                                    <p>Total Cost of Repair</p>
                                    <h1 id="newAnswer">$550</h1>
                                    <h2 className="subtitle" id="totalCostEach">Total Material Cost: $100</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Labor Cost: $300</h2>
                                    <h2 className="subtitle" id="totalCostEach">Total Misc. Cost: $150</h2>
                                </form>
                            </div>
                        </div>
                        <div className="column is-4">
                            <figure>
                                <img id="machineLogo" src="https://i.imgur.com/xQfwpjq.jpg" style={{ width: '125px', height: '125px' }} alt="RepairCoLogo" />
                            </figure>
                            <div className="card large" id="dataBox">
                                <form>
                                    <h1>With a Database Attached to this Frontend, your Submissions will appear here as well.</h1>
                                    <br />
                                    <h2 className="subtitle" id="totalCostEach">The Edit and Delete Feature does not Function in this Demo Display Page</h2>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default DisplayRepair;