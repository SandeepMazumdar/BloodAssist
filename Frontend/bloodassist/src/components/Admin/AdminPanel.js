import React from 'react';
import { Link } from 'react-router-dom';

function AdminPanel() {
  return (
    <div className="admin-panel">
      <h1>Admin Dashboard</h1>
      <div className="admin-menu">
        <Link to="/admin/donors">Manage Donors</Link>
        <Link to="/admin/bloodinventory">Manage Inventory</Link>
        <Link to="/admin/blooddonations">Manage Donations</Link>
        <Link to="/admin/bloodrequests">Manage Blood Requests</Link>
      </div>
    </div>
  );
}

export default AdminPanel;
