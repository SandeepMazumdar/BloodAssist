// src/components/Donor/RegisterDonor.js
import React, { useState } from 'react';
import axios from '../../api/axios';

function RegisterBloodRequests() {
  const [bloodrequests, setBloodRequests] = useState({
    bloodComponent: '',
    quantity: '',
    requestDate: '',
    urgencyLevel: '',
    bloodType: '',
    contactNumber: '',
    patientName: '',
  });

  const handleChange = (e) => {
    setBloodRequests({ ...bloodrequests, [e.target.patientName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/donation/donationrequests', bloodrequests);
      alert('Donation Request registered successfully!');
    } catch (error) {
      console.error('Error registering request', error);
      alert('Failed to register request.');
    }
  };

  return (
    <div className="form-container">
      <h2 align="center" textcolor="#000000">Register a New Blood Request</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bloodComponent"
          placeholder="Blood Component"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="requestDate"
          placeholder="Request Date"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="urgencyLevel"
          placeholder="Urgency Level"
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
          name="patientName"
          placeholder="Patient Name"
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterBloodRequests;
