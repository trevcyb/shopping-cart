import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [showCartbtn, setshowCartbtn] = useState(true)

    useEffect(() => {
        console.log("yo");
        if (window.location.href.includes("home")) {
            setshowCartbtn(false);
        } else {
            setshowCartbtn(true);
        }
    })

    return (
        <div>
            <nav className="nav-wrapper green darken-3">
                <div className="container">
                    <a className="center brand-logo">The Shop</a>
                    <ul className="right">
                        <li id="home"><NavLink to="/home">Home</NavLink></li>
                        <li id="shop"><NavLink to="/shop">Shop</NavLink></li>
                        {showCartbtn && (
                            <a className="sidenav-trigger show-on-large" data-target="slide-out">
                                <i className="material-icons">shopping_cart</i>
                            </a>
                        )}
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar