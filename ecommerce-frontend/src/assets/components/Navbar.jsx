// src/assets/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Keep this line as is. This is a named export.
export const Navbar = () => {
    return (
        <div className="main-navbar-container">
            <div className="navbar-top-info">
                <div className="top-info-left">
                    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <span className="info-item">
                        <i className="fas fa-phone-alt"></i> +91 8888888888
                    </span>
                    <span className="info-item">
                        <i className="fas fa-envelope"></i> websupport@justdial.com
                    </span>
                </div>
                <div className="top-info-right">
                    <span className="info-item">
                        <i className="fas fa-map-marker-alt"></i> Malad West
                    </span>
                    <button type="button" aria-label="Search"><i className="fas fa-search"></i></button>
                    <Link to="/login" className="login-signup-link">
                        <i className="fas fa-user"></i> Log In | Sign Up
                    </Link>
                </div>
            </div>

            <nav className="navbar-main">
                <div className="navbar-main-left">
                    <Link to="/" className="logo-link">
                        <img src="/images/star_spices_logo.png" alt="Star Spices Logo" className="navbar-logo" />
                    </Link>
                </div>

                <div className="navbar-main-right">
                    <button className="hamburger-menu" aria-label="Toggle navigation">
                        ☰
                    </button>
                    <ul className="nav-links">
                        <li><Link to="/" className="nav-link active">HOME</Link></li>
                        <li><Link to="/category" className="nav-link">CATEGORY</Link></li>
                        <li><Link to="/products" className="nav-link">PRODUCTS</Link></li>
                        <li><Link to="/about" className="nav-link">ABOUT US</Link></li>
                        <li><Link to="/gallery" className="nav-link">GALLERY</Link></li>
                        <li><Link to="/videos" className="nav-link">VIDEOS</Link></li>
                        <li><Link to="/testimonials" className="nav-link">TESTIMONIALS</Link></li>
                        <li><Link to="/contact" className="nav-link">CONTACT US</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};