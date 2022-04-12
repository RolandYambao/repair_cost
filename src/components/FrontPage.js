import './FrontPage.css'
import React from 'react';

const FrontPage = () => {
    return (
        <div class="container is-max-desktop">
            <div id="greyTape">Welcome!</div>
            <div id="about">
                <h1>Greetings RepairCo LLC. clients we are dedicated to repairing any damages to your home and items for a fair price.
                    This application is to accurately estimate the damages in need of repairing to assist our field technicans.
                </h1>
            </div>
            <br />
            <section class="buttonSection">
                <a class="button is-danger" id="repairCostButton" type="button" href="/calculate">Estimate Repair Cost</a>
                <a class="button is-info" id="repairEstimateButton" type="button" href="/display">See all Repair Estimates</a>
            </section>
            <section class="featured">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <h2 class="subtitle">Services Available in RepairCo LLC.</h2>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-3">
                        <article>
                            <figure class="image is-5by3">
                                <img src="https://i.imgur.com/qU8cLwQ.jpeg"
                                    alt="Home Repair"
                                    id="frontImage"
                                />
                            </figure>
                            <h2 class="subtitle">Home Repair</h2>
                        </article>
                    </div>

                    <div class="column is-3">
                        <article>
                            <figure class="image is-5by3">
                                <img
                                    src="https://i.imgur.com/yLXE5N7.jpeg"
                                    alt="Appliance Repair"
                                    id="frontImage"
                                />
                            </figure>
                            <h2 class="subtitle">Appliance Repair</h2>
                        </article>
                    </div>
                    <div class="column is-3">
                        <article>
                            <figure class="image is-5by3">
                                <img
                                    src="https://i.imgur.com/7TiI9Yg.jpeg"
                                    alt="Car Repair"
                                    id="frontImage"
                                />
                            </figure>
                            <h2 class="subtitle">Car Repair</h2>
                        </article>
                    </div>
                    <div class="column is-3">
                        <article>
                            <figure class="image is-5by3">
                                <img
                                    src="https://i.imgur.com/HL3EoDc.jpeg"
                                    alt="General Repair"
                                    id="frontImage"
                                />
                            </figure>
                            <h2 class="subtitle">and Many More....</h2>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FrontPage;