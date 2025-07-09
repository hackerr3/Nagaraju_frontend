// src/pages/WelcomePage.jsx
import React from 'react';
import Navbar from '../assets/components/Navbar.jsx';
import Slider from '../assets/components/Slider.jsx';
import './WelcomePage.css'; // Use this for all related styling

const WelcomePage = () => {
    const sliderImages = [
        {
            imageUrl: 'https://images.pexels.com/photos/302820/pexels-photo-302820.jpeg',
            title: 'Premium Products',
            description: 'Discover high-quality items curated just for you.'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg',
            title: 'E-commerce Elegance',
            description: 'Shop the latest trends in tech, fashion, and more.'
        },
        {
            imageUrl: 'https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg',
            title: 'OnePlus Nord CE 3 Lite',
            description: 'Snapdragon power meets affordable price.'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // New image added
            title: 'Sustainable Living',
            description: 'Explore eco-friendly products for a better tomorrow.'
        }
    ];

    return (
        <div className="welcome-page">
            <Navbar />
            <Slider slides={sliderImages} />

            <div className="content-area">
                <div className="product-grid-section">
                    {/* First Card */}
                    <div className="product-category-card">
                        <h2>Appliances for your home | Up to 55% off</h2>
                        <div className="product-images-grid">
                            <div className="product-item">
                                <img src="/images/appliances/air_conditioner.jpg" alt="Air conditioner" />
                                <p>Air conditioners</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/appliances/refrigerators.jpg" alt="Refrigerators" />
                                <p>Refrigerators</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/appliances/washing_machines.jpg" alt="Washing Machines" />
                                <p>Washing Machines</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/appliances/microwaves.jpg" alt="Microwaves" />
                                <p>Microwaves</p>
                            </div>
                        </div>
                        <a href="#" className="see-more-link" onClick={(e) => e.preventDefault()}>See more</a>
                    </div>

                    {/* Second Card */}
                    <div className="product-category-card">
                        <h2>400+ New Launches | Prime Day | 12 - 14 July</h2>
                        <div className="product-images-grid">
                            <div className="product-item">
                                <img src="/images/new_launches/smartwatch_latest.jpg" alt="Smartwatch Latest" />
                                <p>Smartwatch Latest</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/new_launches/headphones.jpg" alt="Headphones" />
                                <p>Headphones</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/new_launches/power_banks.jpg" alt="Power Banks" />
                                <p>Power Banks</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/new_launches/fitness_bands.jpg" alt="Fitness Bands" />
                                <p>Fitness Bands</p>
                            </div>
                        </div>
                        <a href="#" className="see-more-link" onClick={(e) => e.preventDefault()}>See all new launches</a>
                    </div>

                    {/* Third Card */}
                    <div className="product-category-card">
                        <h2>Revamp your home in style</h2>
                        <div className="product-images-grid">
                            <div className="product-item">
                                <img src="/images/home_revamp/cushion_covers.jpg" alt="Cushion covers" />
                                <p>Cushion covers, bedsheets & more</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/home_revamp/figurines_vases.jpg" alt="Figurines, vases" />
                                <p>Figurines, vases & more</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/home_revamp/home_storage.jpg" alt="Home storage" />
                                <p>Home storage</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/home_revamp/lighting.jpg" alt="Lighting solutions" />
                                <p>Lighting solutions</p>
                            </div>
                        </div>
                        <a href="#" className="see-more-link" onClick={(e) => e.preventDefault()}>Explore all</a>
                    </div>

                    {/* Fourth Card */}
                    <div className="product-category-card">
                        <h2>PlayStation 5 Slim & Accessories | No Cost EMI</h2>
                        <div className="product-images-grid">
                            <div className="product-item">
                                <img src="/images/gaming/ps5_slim_digital.jpg" alt="PS5 Slim Digital Edition" />
                                <p>PS5 Slim Digital Edition</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/gaming/ps5_disc_edition.jpg" alt="PS5 Disc Edition" />
                                <p>PS5 Disc Edition</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/gaming/ps5_controllers.jpg" alt="PS5 Controllers" />
                                <p>Controllers</p>
                            </div>
                            <div className="product-item">
                                <img src="/images/gaming/ps5_headsets.jpg" alt="PS5 Headsets" />
                                <p>Headsets</p>
                            </div>
                        </div>
                        <a href="#" className="see-more-link" onClick={(e) => e.preventDefault()}>Shop now</a>
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