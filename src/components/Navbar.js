import React from 'react';

const Navbar = (props) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <img id="logo" src="https://i.imgur.com/xQfwpjq.jpeg" alt="repairLogo" />
                    <strong><a id="companyName">RepairCo LLC.</a></strong>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item"> Home </a>
                        <a className="navbar-item"> Calculate Repair </a>
                        <a className="navbar-item"> All Repair Jobs </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
