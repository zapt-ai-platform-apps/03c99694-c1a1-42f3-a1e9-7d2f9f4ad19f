import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import { format } from 'date-fns';
import { fetchAttendances, handleDelete } from './archiveUtils';

export default function Archive() {
  const [attendances, setAttendances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState('');

  const loadAttendances = async () => {
    await fetchAttendances(filterDate, setAttendances, setLoading);
  };

  useEffect(() => {
    loadAttendances();
  }, [filterDate]);

  const handleExportExcel = () => {
    // Implement Excel export logic
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">أرشيف حضور الطلبة</h2>

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

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">رقم البطاقة</th>
                <th className="p-3 text-left">الاسم الكامل</th>
                <th className="p-3 text-left">تاريخ الميلاد</th>
                <th className="p-3 text-left">المستوى الدراسي</th>
                <th className="p-3 text-left">تاريخ الدخول</th>
                <th className="p-3 text-left">وقت الدخول</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {attendances.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{item.cardNumber}</td>
                  <td className="p-3">{item.fullName}</td>
                  <td className="p-3">{format(new Date(item.birthDate), 'yyyy-MM-dd')}</td>
                  <td className="p-3">{item.gradeLevel}</td>
                  <td className="p-3">{format(new Date(item.entryDate), 'yyyy-MM-dd')}</td>
                  <td className="p-3">{item.entryTime}</td>
                  <td className="p-3">
                    <button 
                      onClick={() => handleDelete(item.id, loadAttendances)}
                      className="bg-red-600 text-white p-2 rounded hover:bg-red-700 cursor-pointer mr-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}