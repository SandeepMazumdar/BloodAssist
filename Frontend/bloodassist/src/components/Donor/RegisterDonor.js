// src/components/Donor/RegisterDonor.js
import React, { useState } from 'react';
import axios from '../../api/axios';

function RegisterDonors() {
  const [donors, setDonors] = useState({
    name: '',
    bloodType: '',
    contactNumber: '',
    dateofBirth: '',
    lastDonationDate: '',
    medicalHistory: '',
  });

  const handleChange = (e) => {
    setDonors({ ...donors, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/donors/register', donors);
      alert('Donor registered successfully!');
    } catch (error) {
      console.error('Error registering donor', error);
      alert('Failed to register donor.');
    }
  };

  return (
    <div className="form-container">
      <h2 align="center" textcolor="#000000">Register a New Donor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bloodType"
          placeholder="Blood Type"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dateofBirth"
          placeholder="Date of Birth"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastDonationDate"
          placeholder="Last Donation Date"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="medicalHistory"
          placeholder="Medical History"
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterDonors;
