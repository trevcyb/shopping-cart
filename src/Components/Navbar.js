import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { showCart } = props;

  return (
    <nav className="nav-wrapper green darken-3">
      <div className="container">
        <a className="brand-logo">The Shop</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <a class="material-icons" onClick={showCart}>
              shopping_cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
