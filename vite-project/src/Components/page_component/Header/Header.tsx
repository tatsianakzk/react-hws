import React from 'react';
import './Header.css';
import logo from './../../../assets/icons/logo.png';
import cart from './../../../assets/icons/cart.png';

function Header() {
    return (
        <header className="header container">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>
            <nav className="nav">
                <a href="/" className="nav-link_home">Home</a>
                <a href="/menu" className="nav-link">Menu</a>
                <a href="/company" className="nav-link">Company</a>
                <a href="/login" className="nav-link">Login</a>
            </nav>
            <div className="cart">
                <div className="cart-icon">
                    <img src={cart} alt="Cart" />
                </div>
            </div>
        </header>
    );
}

export default Header;