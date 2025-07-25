// src/pages/AboutUsPage.jsx
import React from 'react';
import { Navbar } from '../assets/components/Navbar.jsx'; // Assuming Navbar is used here too
import './AboutUsPage.css'; // This CSS file will be created next

const AboutUsPage = () => {
    // Placeholder text for your company's story
    const aboutText = `
        Welcome to Star Spices, your trusted source for the finest quality spices and food products.
        At Star Spices, we are passionate about bringing the authentic flavors of India to your kitchen.
        Our journey began with a commitment to sourcing the freshest, purest ingredients directly from farms,
        ensuring that every product meets the highest standards of taste and hygiene.
        We specialize in a wide range of spices, pulses, and traditional powders, carefully processed
        and packed to retain their natural aroma and nutritional value.
        Join us in our mission to enrich your culinary experiences with the richness of natural spices.
    `;

    // Address details updated for the 522304 area (Guntur district)
    const addressDetails = {
        name: 'Star Spices Headquarters',
        street: 'Door No: 1-234, Main Road',
        locality: 'Guntur District', // General locality for 522304
        city: 'Guntur',
        state: 'Andhra Pradesh',
        pincode: '522304',
        phone: '+91-8888888888',
        email: 'info@starspices.com'
    };

    // Google Maps embed URL for Guntur City, Andhra Pradesh
    // This is a general location for Guntur district which covers pincode 522304.
    // For a highly specific address, you'd generate a custom iframe from Google Maps directly.
    const mapGunturCityEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.281081822295!2d80.44318727490333!3d16.30409898442993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7536d5b0a6e3%3A0xf65b63e9f45f9c4!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1720448400000!5m2!1sen!2sin`;

    return (
        <div className="about-us-page">
            <Navbar /> {/* Displaying Navbar at the top of the About Us page */}

            <div className="about-us-header">
                <h1>About Star Spices</h1>
            </div>

            <div className="about-us-content-wrapper">
                <div className="about-details-container">
                    <h3>Our Story</h3>
                    <p>{aboutText}</p>
                </div>

                <div className="contact-info-map-section">
                    <div className="address-details-container">
                        <h3>Contact Information</h3>
                        <p><strong>Address:</strong></p>
                        <p>{addressDetails.name}</p>
                        <p>{addressDetails.street}</p>
                        <p>{addressDetails.locality}, {addressDetails.city}</p>
                        <p>{addressDetails.state} - {addressDetails.pincode}</p>
                        <p><strong>Phone:</strong> {addressDetails.phone}</p>
                        <p><strong>Email:</strong> {addressDetails.email}</p>
                    </div>

                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe
                            src={mapGunturCityEmbedUrl}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Star Spices Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;