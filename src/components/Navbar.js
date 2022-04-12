import React from 'react';

const Navbar = (props) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                <img id="logo" src="https://i.imgur.com/uWvtR2H.png" alt="repairLogo" />
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item" href="/"> Home </a>
                        <a className="navbar-item" href="/calculate"> Calculate Repair </a>
                        <a className="navbar-item" href="/display"> All Repair Estimations </a>
                    </div>
                </div>
            </div>
            <script>{
                // Hamburger menu functionality
                document.addEventListener('DOMContentLoaded', () => {
                    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
                    if ($navbarBurgers.length > 0) {
                        $navbarBurgers.forEach(el => {
                            el.addEventListener('click', () => {
                                const target = el.dataset.target;
                                const $target = document.getElementById(target);
                                el.classList.toggle('is-active');
                                $target.classList.toggle('is-active');
                            });
                        });
                    }
                })
            }
            </script>
        </nav>
    );
}

export default Navbar;
