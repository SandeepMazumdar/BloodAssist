import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import RegisterBloodRequests from './components/Donation/DonationRequests';
import RegisterDonor from './components/Donor/RegisterDonor';
import DonorsByBloodType from './components/Donor/DonorsByBloodType';
import RecordDonation from './components/Donation/RecordDonation';
import Inventory from './components/Inventory/Inventory';
import Dashboard from './components/Dashboard/Dashboard';
import AdminPanel from './components/Admin/AdminPanel';
import ManageDonors from './components/Admin/ManageDonors';
import ManageBloodRequests from './components/Admin/ManageBloodRequests';
import ManageBloodDonations from './components/Admin/ManageDonations';
import ManageBloodInventory from './components/Admin/ManageInventory';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/donation/donationrequests" element={<RegisterBloodRequests />} />
      <Route path="/donors/register" element={<RegisterDonor />} />
      <Route path="/donors/search" element={<DonorsByBloodType />} />
      <Route path="/donations/record" element={<RecordDonation />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/donors" element={<ManageDonors />} />
      <Route path="/admin/bloodinventory" element={<ManageBloodInventory />} />
      <Route path="/admin/blooddonations" element={<ManageBloodDonations />} />
      <Route path="/admin/bloodrequests" element={<ManageBloodRequests />} />
    </Routes>
  );
}

export default AppRoutes;
