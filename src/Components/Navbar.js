import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper green darken-3">
            <div className="container">
                <a className="center brand-logo">The Shop</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar