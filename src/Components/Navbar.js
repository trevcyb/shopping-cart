import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav className="nav-wrapper green darken-3">
                <div className="container">
                    <a className="center brand-logo">The Shop</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <a className="sidenav-trigger" data-target="slide-out">
                            <i className="material-icons">shopping_cart</i>
                        </a>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar