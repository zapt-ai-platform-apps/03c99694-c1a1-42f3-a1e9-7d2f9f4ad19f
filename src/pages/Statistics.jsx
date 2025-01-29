import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import StatCard from './components/StatCard';
import StatisticsTable from './components/StatisticsTable';

export default function Statistics() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState(new Date().toISOString().split('T')[0]);
  const [stats, setStats] = useState({
    totalStudents: 0,
    dailyAttendance: { count: 0, percentage: 0 },
    dailyAbsence: { count: 0, percentage: 0 },
    monthlyAbsence: { count: 0, percentage: 0 },
    quarterlyAbsence: { count: 0, percentage: 0 },
    yearlyAbsence: { count: 0, percentage: 0 }
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/attendance?date=${filterDate}`);
      const result = await response.json();
      setData(result.data);
      setStats(result.stats);
    } catch (error) {
      Sentry.captureException(error);
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filterDate]);

  const handleExportExcel = () => {
    // Implement Excel export logic
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">إحصائيات الحضور والغياب</h2>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
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
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <StatCard 
              title="Total Students" 
              value={stats.totalStudents}
            />
            <StatCard 
              title="Daily Attendance" 
              value={`${stats.dailyAttendance.count} (${stats.dailyAttendance.percentage}%)`}
            />
            <StatCard 
              title="Daily Absence" 
              value={`${stats.dailyAbsence.count} (${stats.dailyAbsence.percentage}%)`}
            />
            <StatCard 
              title="Monthly Absence" 
              value={`${stats.monthlyAbsence.count} (${stats.monthlyAbsence.percentage}%)`}
            />
            <StatCard 
              title="Quarterly Absence" 
              value={`${stats.quarterlyAbsence.count} (${stats.quarterlyAbsence.percentage}%)`}
            />
            <StatCard 
              title="Yearly Absence" 
              value={`${stats.yearlyAbsence.count} (${stats.yearlyAbsence.percentage}%)`}
            />
          </div>

          <StatisticsTable data={data} />
        </>
      )}
    </div>
  );
}