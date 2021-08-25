import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Cart {" "}
                    <span className="badge badge-ll-seconda">
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
};



export default NavBar;