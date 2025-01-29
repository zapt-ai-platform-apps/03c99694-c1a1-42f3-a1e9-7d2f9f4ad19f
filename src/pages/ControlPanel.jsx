import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleAdminLogin } from './handlers/adminHandlers';
import { handleChangeAppPassword, handleChangeAdminPassword, handleClearDatabase, handleImportExcel } from './handlers/dataHandlers';

export default function ControlPanel() {
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginHandler = (e) => handleAdminLogin(e, adminPassword, setIsAuthenticated, setError);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={loginHandler}>
            <div className="mb-4">
              <label htmlFor="adminPassword" className="block mb-2">Admin Password</label>
              <input
                type="password"
                id="adminPassword"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full p-2 border rounded box-border"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8">Control Panel</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Password Management</h3>
          <button 
            onClick={handleChangeAppPassword}
            className="w-full mb-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Change App Password
          </button>
          <button 
            onClick={handleChangeAdminPassword}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Change Admin Password
          </button>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Data Management</h3>
          <button 
            onClick={handleClearDatabase}
            className="w-full mb-4 bg-red-600 text-white p-2 rounded hover:bg-red-700 cursor-pointer"
          >
            Clear Entire Database
          </button>
          <button 
            onClick={handleImportExcel}
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 cursor-pointer"
          >
            Import from Excel
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Statistics Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
            Show General Statistics
          </button>
          <button className="p-4 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
            Filter by Date
          </button>
          <button className="p-4 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
            Filter by Major
          </button>
          <button className="p-4 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
            Filter by Birth Date
          </button>
        </div>
      </div>
    </div>
  );
}