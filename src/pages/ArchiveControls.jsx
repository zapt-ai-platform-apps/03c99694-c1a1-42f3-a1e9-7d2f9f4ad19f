import React from 'react';

export default function ArchiveControls({ filterDate, setFilterDate, loadAttendances }) {
  const handleExportExcel = () => {
    // Implement Excel export logic
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mb-4 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/2">
        <label htmlFor="filterDate" className="block mb-2">Filter by Date</label>
        <input
          type="date"
          id="filterDate"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="w-full p-2 border rounded box-border"
        />
      </div>
      
      <div className="flex gap-2 items-end">
        <button 
          onClick={handleExportExcel}
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700 cursor-pointer"
        >
          Export to Excel
        </button>
        <button 
          onClick={handlePrint}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Print
        </button>
      </div>
    </div>
  );
}