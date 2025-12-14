import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';

function ManageDonors() {
  const [donors, setDonors] = useState([]);

  const fetchDonors = async () => {
    try {
      const response = await axios.get('/admin/donors');
      setDonors(response.data);
    } catch (error) {
      console.error('Error fetching donors', error);
    }
  };

  const deleteDonors = async (id) => {
    try {
      await axios.delete(`/admin/donors/${id}`);
      alert('Donor deleted successfully');
      fetchDonors();
    } catch (error) {
      console.error('Error deleting donor', error);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <div className="manage">
      <h2>Manage Donors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donors) => (
            <tr key={donors.id}>
              <td>{donors.name}</td>
              <td>{donors.bloodType}</td>
              <td>{donors.email}</td>
              <td>{donors.contactNumber}</td>
              <td>
                <button onClick={() => deleteDonors(donors.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageDonors;
