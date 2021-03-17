import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [cartshow, setcartshow] = useState(false);

    const handleCart = (e) => {
        console.log(e);
        if (e.target.parentElement.id === "shop") {
            setcartshow(true)
        } else {
            setcartshow(false)
        }
    }

    const handleCartload = () => {
        if(/home/.test(window.location.href)) {
            setcartshow(false)
        } else {
            setcartshow(true)
        }
    }

    return (
        <div>
            <nav className="nav-wrapper green darken-3">
                <div className="container">
                    <a className="center brand-logo">The Shop</a>
                    <ul className="right">
                        <li id="home" onClick={(e) => handleCart(e)} onLoad={() => handleCartload()}><NavLink to="/home">Home</NavLink></li>
                        <li id="shop" onClick={(e) => handleCart(e)} onLoad={() => handleCartload()}><NavLink to="/shop">Shop</NavLink></li>
                        {cartshow && (
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