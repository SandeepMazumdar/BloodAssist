import React, { useState } from 'react';
import axios from '../../api/axios';

function RecordDonation() {
  const [donation, setDonation] = useState({
    donorId: '',
    donationDate: '',
    bloodComponent: '',
    quantity: '',
  });

  const handleChange = (e) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/donations/record', donation);
      alert('Donation recorded successfully!');
    } catch (error) {
      console.error('Error recording donation', error);
      alert('Failed to record donation.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="donorId" placeholder="Donor ID" onChange={handleChange} />
      <input type="date" name="donationDate" onChange={handleChange} />
      <input type="text" name="bloodComponent" placeholder="Blood Component (e.g., Plasma)" onChange={handleChange} />
      <input type="number" name="quantity" placeholder="Quantity (ml)" onChange={handleChange} />
      <button type="submit">Record Donation</button>
    </form>
  );
}

export default RecordDonation;
