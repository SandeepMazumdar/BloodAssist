import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';

function Dashboard() {
  const [stats, setStats] = useState({
    totalDonors: 500,
    totalDonations: 2000,
    availableBlood: 1000,
  });

  useEffect(() => {
    // Fetch stats from the backend
    const fetchStats = async () => {
      try {
        const response = await axios.get('/dashboard/stats'); // Replace with actual endpoint
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Donate Blood, Save Lives</h1>
          <p>Your blood donation can make a difference in someone's life.</p>
          <button className="cta-button">Schedule Your Donation</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stat-card">
            <h3>{stats.totalDonors}</h3>
            <p>Total Donors</p>
          </div>
          <div className="stat-card">
            <h3>{stats.totalDonations}</h3>
            <p>Total Donations</p>
          </div>
          <div className="stat-card">
            <h3>{stats.availableBlood} ml</h3>
            <p>Available Blood</p>
          </div>
        </div>
      </section>
      </div>
  );
}

export default Dashboard;
