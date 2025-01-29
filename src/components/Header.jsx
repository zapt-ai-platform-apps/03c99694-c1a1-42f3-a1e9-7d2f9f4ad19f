import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Attendance System</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-200">Home</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}