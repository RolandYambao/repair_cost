import './CalculateRepair.css';
import React, { Component } from 'react';

class CalculateRepair extends Component {

    render() {
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
                        <h1 className="title is-2">Thoughts, stories, and ideas.</h1>
                        <div id="hero-input-group" className="field has-addons has-addons-centered">
                            <div className="control">
                                <input className="input is-medium" type="text" placeholder="Search..." />
                            </div>
                            <div className="control">
                                <a className="button is-medium is-primary">
                                    <i className="fal fa-search"></i>
                                </a>
                            </div>
                        </div>
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
                                    <button class="controls" id="plus">+</button>
                                    <input type="number" class="controls" id="input" placeholder="0" />
                                    <button class="controls" id="minus">-</button>
                                    <h2 className="subtitle">Material Cost</h2>
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
                                    <button class="controls" id="plus">+</button>
                                    <input type="number" class="controls" id="input" placeholder="0" />
                                    <button class="controls" id="minus">-</button>
                                    <h2 className="subtitle">Labor Cost</h2>
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
                                    <button class="controls" id="plus">+</button>
                                    <input type="number" class="controls" id="input" placeholder="0" />
                                    <button class="controls" id="minus">-</button>
                                    <h2 className="subtitle">Misc. Cost</h2>
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