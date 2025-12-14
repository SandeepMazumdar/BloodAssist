// src/components/Layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-1">
        <a href="/dashboard" className="logo"> 
          <i className="fa-solid fa-hand-holding-droplet"></i>
          <h1> BloodAssist</h1>
        </a>
      </div>
      <div className="header-2">
        <nav>
          <Link to="dashboard">Dashboard</Link>
          <Link to="/donors/register">Register Donor</Link>
          <Link to="/donors/search">Search Donors</Link>
          <Link to="/donation/donationrequests">Create Blood Request</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
