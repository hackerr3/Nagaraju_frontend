// src/assets/components/SubNav.jsx
import React from 'react';
import './SubNav.css'; // Link to its own CSS file

const SubNav = () => {
  return (
    <nav className="sub-nav">
      <ul>
        <li><a href="#">All</a></li>
        <li><a href="#">Best Sellers</a></li>
        <li><a href="#">Today's Deals</a></li>
        <li><a href="#">Mobiles</a></li>
        <li><a href="#">Customer Service</a></li>
        <li><a href="#">New Releases</a></li>
        <li><a href="#">Fashion</a></li>
        <li><a href="#">Amazon Pay</a></li>
        <li><a href="#">Electronics</a></li>
        <li><a href="#">Home & Kitchen</a></li>
        {/* Add more categories as needed */}
      </ul>
    </nav>
  );
};

export default SubNav;