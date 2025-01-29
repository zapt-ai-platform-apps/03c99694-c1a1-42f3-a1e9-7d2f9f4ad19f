import React, { useState } from 'react';

export default function StudentForm({ onCardRead }) {
  const [cardNumber, setCardNumber] = useState('');

  const handleCardInput = (e) => {
    const newCardNumber = e.target.value;
    setCardNumber(newCardNumber);
    if (newCardNumber.length === 10) {
      onCardRead(newCardNumber);
      setCardNumber('');
    }
  };

  return (
    <div className="my-8 text-center">
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardInput}
        placeholder="Scan Student Card"
        className="w-64 p-2 border rounded box-border"
        maxLength={10}
      />
    </div>
  );
}