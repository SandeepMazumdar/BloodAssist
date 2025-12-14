import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';

function Inventory() {
  const [inventory, setInventory] = useState([]);

  const fetchInventory = async () => {
    try {
      const response = await axios.get('/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory', error);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div>
      <h2>Blood Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Blood Component</th>
            <th>Blood Type</th>
            <th>Quantity (ml)</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.bloodComponent}</td>
              <td>{item.bloodType}</td>
              <td>{item.quantity}</td>
              <td>{item.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
