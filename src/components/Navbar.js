import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Project B</h2>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/hivehealth">Hive Health</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/predictive-analysis">Predictive Analysis</Link></li>
      </ul>
      <div className="bee">🐝</div> {/* Animated Bee Emoji */}
    </nav>
  );
};

export default Navbar;
