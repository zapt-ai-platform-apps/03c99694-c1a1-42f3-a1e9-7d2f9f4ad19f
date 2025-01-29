import React from 'react';
import StudentForm from '../components/StudentForm';

export default function Dashboard() {
  const handleCardRead = (cardNumber) => {
    console.log('Card read:', cardNumber);
    // Here you would handle the card read event (check database, log attendance, etc.)
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <StudentForm onCardRead={handleCardRead} />
    </div>
  );
}