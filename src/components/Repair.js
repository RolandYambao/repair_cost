import './Repair.css';
import React, { Component } from 'react';

class Repair extends Component {

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
                                    <h2 className="subtitle">Featured Articles</h2>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <div className="field has-addons has-addons-centered">
                                        <div className="control">
                                            <a className="button is-small" disabled>
                                                <i className="far fa-chevron-left"></i>
                                            </a>
                                        </div>
                                        <div className="control">
                                            <a className="button is-small">
                                                <i className="far fa-chevron-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="columns">
                        <div class="column is-3">
                            <article>
                                <figure class="image is-5by3">
                                    <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" alt="placeholder" />
                                </figure>
                                <h2 class="subtitle">Creating a Group</h2>
                                <span class="tag is-rounded">Users & Groups</span>
                            </article>
                        </div>
                        <div class="column is-3">
                            <article>
                                <figure class="image is-5by3">
                                    <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" alt="placeholder" />
                                </figure>
                                <h2 class="subtitle">Downloading/Printing Your Invoices</h2>
                                <span class="tag is-rounded">Billing & Accounts</span>
                            </article>
                        </div>
                        <div class="column is-3">
                            <article>
                                <figure class="image is-5by3">
                                    <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" alt="placeholder" />
                                </figure>
                                <h2 class="subtitle">Changing the Account Owner</h2>
                                <span class="tag is-rounded">Billing & Accounts</span>
                            </article>
                        </div>
                        <div class="column is-3">
                            <article>
                                <figure class="image is-5by3">
                                    <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" alt="placeholder" />
                                </figure>
                                <h2 class="subtitle">Adding Internal Notes</h2>
                                <span class="tag is-rounded">Billing & Accounts</span>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Repair;