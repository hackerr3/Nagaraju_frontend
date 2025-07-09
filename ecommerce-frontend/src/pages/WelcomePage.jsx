// src/pages/WelcomePage.jsx
import React from 'react';
import { Navbar } from '../assets/components/Navbar.jsx';
import Slider from '../assets/components/Slider.jsx';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './WelcomePage.css';

const WelcomePage = () => {
    const githubImagesBaseUrl = 'https://raw.githubusercontent.com/hackerr3/Nagaraju/main/imzes/';

    const sliderImages = [
        {
            imageUrl: `${githubImagesBaseUrl}chill8.jpg`,
            title: 'Freshly Picked Spices',
            description: 'Experience the rich aroma of nature.'
        },
        {
            imageUrl: `${githubImagesBaseUrl}chilly.jpg`,
            title: 'Premium Quality Chilies',
            description: 'Sourced directly from the best farms.'
        },
        {
            imageUrl: `${githubImagesBaseUrl}corn seeds.jpg`,
            title: 'Organic Corn Seeds',
            description: 'For a healthy and bountiful harvest.'
        },
        {
            imageUrl: `${githubImagesBaseUrl}cornseeds2.jpg`,
            title: 'High Yield Corn Varieties',
            description: 'Boost your agricultural output.'
        },
        {
            imageUrl: `${githubImagesBaseUrl}domestic powder2.jpg`,
            title: 'Homemade Spice Blends',
            description: 'Authentic flavors, just like grandma used to make.'
        }
    ];

    return (
        <div className="welcome-page">
            <Navbar />
            <Slider slides={sliderImages} />

            <div className="content-area">
                <div className="product-grid-section">
                    {/* First Card - Appliances (now using other images) */}
                    <div className="product-category-card">
                        <h2>Quality Powders & Spices</h2>
                        <div className="product-images-grid">
                            <div className="product-item">
                                <img src={`${githubImagesBaseUrl}domestic powdwe1.jpg`} alt="Domestic Powder 1" />
                                <p>Domestic Powder</p>
                            </div>
                            <div className="product-item">
                                <img src={`${githubImagesBaseUrl}goddukaram.jpg`} alt="Goddukaram Powder" />
                                <p>Goddukaram</p>
                            </div>
                            <div className="product-item">
                                <img src={`${githubImagesBaseUrl}raw chilli powedr.jpg`} alt="Raw Chilli Powder" />
                                <p>Raw Chilli Powder</p>
                            </div>
                            <div className="product-item">
                                <img src={`${githubImagesBaseUrl}raw2.jpg`} alt="Raw Spices" />
                                <p>Assorted Raw Spices</p>
                            </div>
                        </div>
                        {/* Use Link for navigation */}
                        <Link to="/category/spices" className="see-more-link">View All Spices</Link>
                    </div>

                    {/* Second Card - New Launches (now using other images) */}
                    <div className="product-category-card">
                        <h2>Premium Dal & Pulses</h2>
                        <div className="product-images-grid">
                            <div className="product-item">
                                <img src={`${githubImagesBaseUrl}thr2.jpg`} alt="Thur Dal" />
                                <p>Thur Dal (Type 2)</p>
                            </div>
                            <div className="product-item">
                                <img src={`${githubImagesBaseUrl}thur.jpg`} alt="Thur Dal" />
                                <p>Thur Dal (Type 1)</p>
                            </div>
                            <div className="product-item">
                                <img src={`${githubImagesBaseUrl}urad dal.jpg`} alt="Urad Dal" />
                                <p>Urad Dal</p>
                            </div>
                            <div className="product-item">
                                <img src={`${githubImagesBaseUrl}urad dall1.jpg`} alt="Urad Dal 1" />
                                <p>Urad Dal (Bag)</p>
                            </div>
                        </div>
                        {/* Use Link for navigation */}
                        <Link to="/category/pulses" className="see-more-link">Explore Pulses</Link>
                    </div>

                    {/* Third Card - Revamp Home (You only provided 15 images. There are no more images for this card, so I'll put a placeholder or remove it if you wish) */}
                    <div className="product-category-card">
                        <h2>More from Our Collection</h2>
                        <div className="product-images-grid">
                            <div className="product-item">
                                <img src="https://via.placeholder.com/150?text=More+Products" alt="Placeholder" />
                                <p>Discover New Arrivals</p>
                            </div>
                            <div className="product-item">
                                <img src="https://via.placeholder.com/150?text=Exciting+Offers" alt="Placeholder" />
                                <p>Exciting Offers</p>
                            </div>
                            <div className="product-item">
                                <img src="https://via.placeholder.com/150?text=Best+Sellers" alt="Placeholder" />
                                <p>Best Sellers</p>
                            </div>
                            <div className="product-item">
                                <img src="https://via.placeholder.com/150?text=Coming+Soon" alt="Placeholder" />
                                <p>Coming Soon</p>
                            </div>
                        </div>
                        {/* Use Link for navigation */}
                        <Link to="/products/all" className="see-more-link">View All Categories</Link>
                    </div>

                    {/* Fourth Card - PlayStation (You only provided 15 images. No more images for this card) */}
                     <div className="product-category-card">
                        <h2>Special Selections</h2>
                        <div className="product-images-grid">
                            <div className="product-item">
                                <img src="https://via.placeholder.com/150?text=Featured+Item+1" alt="Featured Item 1" />
                                <p>Featured Item 1</p>
                            </div>
                            <div className="product-item">
                                <img src="https://via.placeholder.com/150?text=Featured+Item+2" alt="Featured Item 2" />
                                <p>Featured Item 2</p>
                            </div>
                            <div className="product-item">
                                <img src="https://via.placeholder.com/150?text=Featured+Item+3" alt="Featured Item 3" />
                                <p>Featured Item 3</p>
                            </div>
                            <div className="product-item">
                                <img src="https://via.placeholder.com/150?text=Featured+Item+4" alt="Featured Item 4" />
                                <p>Featured Item 4</p>
                            </div>
                        </div>
                        {/* Use Link for navigation */}
                        <Link to="/products/special" className="see-more-link">Discover More</Link>
                    </div>

                </div>
            </div>

            {/* Owner Section moved outside content-area to span full width */}
            <div id="owner-section" className="owner-section">
                <div className="owner-overlay">
                    <h2>Owner Contact Details</h2>
                    <p>Name: Rajesh Kumar</p>
                    <p>Email: rajesh@example.com</p>
                    <p>Phone: +91-9876543210</p>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;