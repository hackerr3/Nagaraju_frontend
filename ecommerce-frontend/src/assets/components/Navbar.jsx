// src/assets/components/Navbar.js
import React from 'react';
import './Navbar.css'; //

const Navbar = () => {
    return (
        <>
            {/* Top Main Navbar */}
            <nav className="navbar-top">
                <div className="navbar-left">
                    {/* Replace with your actual logo path */}
                    <a href="/" className="logo-link">
                        <img src="/images/village_spices_logo.png" alt="Village Spices Logo" className="navbar-logo" />
                    </a>
                    {/* Removed delivery address section */}
                </div>

                <div className="navbar-center">
                    <select className="search-category-dropdown">
                        <option>All</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Home & Kitchen</option>
                        {/* Add more categories as needed */}
                    </select>
                    <input type="text" className="search-input" placeholder="Search Amazon.in" /> {/* Updated placeholder */}
                    <button className="search-button">
                        <span className="search-icon">🔍</span> {/* Unicode for search icon */}
                    </button>
                </div>

                <div className="navbar-right">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/about" className="nav-link">About</a>
                    <select className="language-dropdown">
                        <option>EN</option>
                        <option>HI</option>
                    </select>
                    <div className="account-section">
                        <a href="/signin" className="account-link">Hello, Sign in</a>
                        <a href="/account" className="account-link">Account & Lists ▼</a> {/* Dropdown indicator */}
                    </div>
                    <div className="returns-orders-section">
                        <a href="/returns" className="returns-orders-link">Returns</a>
                        <a href="/orders" className="returns-orders-link">& Orders</a>
                    </div>
                    <a href="/cart" className="cart-section">
                        <span className="cart-icon">🛒</span> {/* Unicode for shopping cart */}
                        <span className="cart-count">0</span> {/* Example: cart item count */}
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
