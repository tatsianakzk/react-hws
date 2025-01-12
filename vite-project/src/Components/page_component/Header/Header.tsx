import React from 'react';
import './Header.css';
import logo from './../../../assets/icons/logo.png';
import cart from './../../../assets/icons/cart.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="headerContainer">
            <div className="headerLogo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="headerLogoImg" />
                </Link>
            </div>
            <nav className="headerNav">
                <Link to="/" className="headerNavLinkHome">Home</Link>
                <Link to="/menu" className="headerNavLink">Menu</Link>
                <Link to="/" className="headerNavLink">Company</Link>
                <Link to="/login" className="headerNavLink">Login</Link>
            </nav>
            <div className="headerCart">
                <div className="headerCartIcon">
                    <Link to="/order">
                        <img src={cart} alt="Cart" className="headerCartImg" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;