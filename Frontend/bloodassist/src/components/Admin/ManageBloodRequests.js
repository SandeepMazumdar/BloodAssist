import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';

function ManageBloodRequests() {
  const [bloodrequests, setBloodRequests] = useState([]);

  const fetchBloodRequests = async () => {
    try {
      const response = await axios.get('/admin/bloodrequests');
      setBloodRequests(response.data);
    } catch (error) {
      console.error('Error fetching bloodrequests', error);
    }
  };

  const deleteBloodRequests = async (id) => {
    try {
      await axios.delete(`/admin/bloodrequests/${id}`);
      alert('BloodRequests deleted successfully');
      fetchBloodRequests();
    } catch (error) {
      console.error('Error deleting bloodrequests', error);
    }
  };

  useEffect(() => {
    fetchBloodRequests();
  }, []);

  return (
    <div className="manage">
      <h2>Manage BloodRequests</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Blood Component</th>
            <th>Quantity</th>
            <th>Request Date</th>
            <th>Urgency Level</th>
            <th>Blood Type</th>
            <th>Contact Number</th>
            <th>Patient Name</th>
          </tr>
        </thead>
        <tbody>
          {bloodrequests.map((bloodrequests) => (
            <tr key={bloodrequests.id}>
              <td>{bloodrequests.bloodComponent}</td>
              <td>{bloodrequests.quantity}</td>
              <td>{bloodrequests.requestDate}</td>
              <td>{bloodrequests.urgencyLevel}</td>
              <td>{bloodrequests.bloodType}</td>
              <td>{bloodrequests.contactNumber}</td>
              <td>{bloodrequests.patientName}</td>
              <td>
                <button onClick={() => deleteBloodRequests(bloodrequests.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBloodRequests;
