import './FrontPage.css'
import React from 'react';

const FrontPage = () => {
    return (
        <div className="container is-max-desktop">
            <div id="yellowTape">Welcome!</div>
            <div id="about">
                <h1>Greetings RepairCo LLC. clients we are dedicated to repairng any damages to your home for a fair price.
                    This application is to accurately estimate the damages in need of repairing to assist our field technicans.
                </h1>
            </div>
            <br />
            <section className="buttonSection">
                <a className="button is-danger" id="repairCostButton" type="button" href="/calculate">Estimate Repair Cost</a>
                <a className="button is-info" id="repairEstimateButton" type="button" href="/newsale">See all Repair Estimates</a>
            </section>
            <section className="featured">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h2 className="subtitle">Items availabe on Mercer:</h2>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3">
                        <a href="/viewitems">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/popular-yard-sale-garage-sale-outdoor-furniture.jpg" />
                                </figure>
                                <h2 className="subtitle">Outdoor Furniture</h2>
                            </article>
                        </a>
                    </div>

                    <div className="column is-3">
                        <a href="/viewitems">
                            <article>
                                <figure className="image is-5by3">
                                    <img
                                        src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/popular-yard-sale-garage-sale-lawn-equipment.jpg"
                                        alt="Yard Sale"
                                    />
                                </figure>
                                <h2 className="subtitle">Lawn Equipment</h2>
                            </article>
                        </a>
                    </div>
                    <div className="column is-3">
                        <a href="/viewitems">
                            <article>
                                <figure className="image is-5by3">
                                    <img
                                        src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/best-items-to-sell-yard-garage-sales-kids-toys.jpg"
                                        alt="Garage Sale"
                                    />
                                </figure>
                                <h2 className="subtitle">Children's Toys</h2>
                            </article>
                        </a>
                    </div>
                    <div className="column is-3">
                        <a href="/viewitems">
                            <article>
                                <figure className="image is-5by3">
                                    <img
                                        src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/popular-yard-sale-garage-sale-costume-jewelry.jpg"
                                        alt="Yard Sale Items"
                                    />
                                </figure>
                                <h2 className="subtitle">Jewelry</h2>
                                <br />
                            </article>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FrontPage;