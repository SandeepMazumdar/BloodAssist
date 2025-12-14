import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';

function ManageBloodDonations() {
  const [blooddonations, setBloodDonations] = useState([]);

  const fetchBloodDonations = async () => {
    try {
      const response = await axios.get('/admin/blooddonations');
      setBloodDonations(response.data);
    } catch (error) {
      console.error('Error fetching blooddonations', error);
    }
  };

  const deleteBloodDonations = async (id) => {
    try {
      await axios.delete(`/admin/blooddonations/${id}`);
      alert('blooddonation deleted successfully');
      fetchBloodDonations();
    } catch (error) {
      console.error('Error deleting blooddonation', error);
    }
  };

  useEffect(() => {
    fetchBloodDonations();
  }, []);

  return (
    <div className="manage">
      <h2>Manage BloodDonations</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Blood Component</th>
            <th>Blood Type</th>
            <th>Donation Date</th>
            <th>Donor ID</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {blooddonations.map((blooddonations) => (
            <tr key={blooddonations.id}>
              <td>{blooddonations.bloodComponent}</td>
              <td>{blooddonations.bloodType}</td>
              <td>{blooddonations.donationDate}</td>
              <td>{blooddonations.donorID}</td>
              <td>{blooddonations.quantity}</td>
              <td>
                <button onClick={() => deleteBloodDonations(blooddonations.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBloodDonations;
