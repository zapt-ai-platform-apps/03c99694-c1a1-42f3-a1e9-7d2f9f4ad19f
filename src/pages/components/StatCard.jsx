import React from 'react';

export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
}