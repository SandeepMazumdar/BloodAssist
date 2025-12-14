import React, { useState } from 'react';
import axios from '../../api/axios';

function DonorsByBloodType() {
  const [bloodType, setBloodType] = useState('');
  const [donors, setDonors] = useState([]);

  const fetchDonors = async () => {
    try {
      const response = await axios.get(`/donors/by-blood-type/${bloodType}`);
      setDonors(response.data);
    } catch (error) {
      console.error("Error fetching donors", error);
    }
  };

  return (
    <div class="search">
      <input type="text" placeholder="Enter Blood Type" onChange={(e) => setBloodType(e.target.value)} />
      <button onClick={fetchDonors}>Search</button>
      <ul>
        {donors.map(donors => (
          <li key={donors.id}>{donors.name} - {donors.bloodType} - {donors.contactNumber}</li>
        ))}
      </ul>
    </div>
  );
}

export default DonorsByBloodType;
