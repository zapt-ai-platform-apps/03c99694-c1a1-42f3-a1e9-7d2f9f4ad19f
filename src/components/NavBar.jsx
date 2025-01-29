import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-gray-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/stats" className="hover:text-gray-300">Statistics</Link>
        <Link to="/archive" className="hover:text-gray-300">Archive</Link>
        <Link to="/control" className="hover:text-gray-300">Control Panel</Link>
      </div>
    </nav>
  );
}