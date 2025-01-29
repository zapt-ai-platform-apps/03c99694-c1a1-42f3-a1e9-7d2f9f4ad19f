import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import { format } from 'date-fns';
import { fetchAttendances, handleDelete } from './archiveUtils';
import ArchiveTable from './ArchiveTable';
import ArchiveControls from './ArchiveControls';

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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">أرشيف حضور الطلبة</h2>
      <ArchiveControls 
        filterDate={filterDate} 
        setFilterDate={setFilterDate} 
        loadAttendances={loadAttendances} 
      />
      <ArchiveTable 
        attendances={attendances} 
        loading={loading} 
        loadAttendances={loadAttendances}
      />
    </div>
  );
}