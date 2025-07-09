// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import WelcomePage from './pages/WelcomePage';
import AboutUsPage from './pages/AboutUsPage'; // Import the new AboutUsPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} /> {/* Route for your home page */}
        <Route path="/about" element={<AboutUsPage />} /> {/* Route for the About Us page */}
        {/* Add more routes here for Category, Products, etc. as you create them */}
      </Routes>
    </Router>
  );
}

export default App;