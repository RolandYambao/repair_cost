import './FrontPage.css'
import React from 'react';

const FrontPage = () => {
    return (
        <div className="container is-max-desktop">
            <div id="yellowTape">Welcome!</div>
            <div id="about">
                <h1>Greetings RepairCo LLC. clients we are dedicated to repairing any damages to your home and items for a fair price.
                    This application is to accurately estimate the damages in need of repairing to assist our field technicans.
                </h1>
            </div>
            <br />
            <section className="buttonSection">
                <a className="button is-danger" id="repairCostButton" type="button" href="/calculate">Estimate Repair Cost</a>
                <a className="button is-info" id="repairEstimateButton" type="button" href="/display">See all Repair Estimates</a>
            </section>
            <section className="featured">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h2 className="subtitle">Services Available in RepairCo LLC.</h2>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3">
                        <a href="/viewitems">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://i.imgur.com/qU8cLwQ.jpeg" alt="Home Repair" />
                                </figure>
                                <h2 className="subtitle">Home Repair</h2>
                            </article>
                        </a>
                    </div>

                    <div className="column is-3">
                        <article>
                            <figure className="image is-5by3">
                                <img
                                    src="https://i.imgur.com/yLXE5N7.jpeg"
                                    alt="Appliance Repair"
                                />
                            </figure>
                            <h2 className="subtitle">Appliance Repair</h2>
                        </article>
                    </div>
                    <div className="column is-3">
                        <article>
                            <figure className="image is-5by3">
                                <img
                                    src="https://i.imgur.com/7TiI9Yg.jpeg"
                                    alt="Car Repair"
                                />
                            </figure>
                            <h2 className="subtitle">Car Repair</h2>
                        </article>
                    </div>
                    <div className="column is-3">
                        <article>
                            <figure className="image is-5by3">
                                <img
                                    src="https://i.imgur.com/HL3EoDc.jpeg"
                                    alt="General Repair"
                                />
                            </figure>
                            <h2 className="subtitle">and Many More....</h2>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FrontPage;