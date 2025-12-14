import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';

function ManageBloodInventory() {
  const [bloodinventory, setBloodInventory] = useState([]);

  const fetchBloodInventory = async () => {
    try {
      const response = await axios.get('/admin/bloodinventory');
      setBloodInventory(response.data);
    } catch (error) {
      console.error('Error fetching bloodinventory', error);
    }
  };

  const deleteBloodInventory = async (id) => {
    try {
      await axios.delete(`/admin/bloodinventory/${id}`);
      alert('BloodInventory deleted successfully');
      fetchBloodInventory();
    } catch (error) {
      console.error('Error deleting bloodinventory', error);
    }
  };

  useEffect(() => {
    fetchBloodInventory();
  }, []);

  return (
    <div className="manage">
      <h2>Manage BloodInventory</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Blood Type</th>
            <th>Blood Component</th>
            <th>Quantity</th>
            <th>Storage Location</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {bloodinventory.map((bloodinventory) => (
            <tr key={bloodinventory.id}>
              <td>{bloodinventory.bloodType}</td>
              <td>{bloodinventory.bloodcomponent}</td>
              <td>{bloodinventory.quantity}</td>
              <td>{bloodinventory.storageLocation}</td>
              <td>{bloodinventory.expiryDate}</td>
              <td>
                <button onClick={() => deleteBloodInventory(bloodinventory.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBloodInventory;
