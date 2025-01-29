import React from 'react';

export default function StatisticsTable({ data }) {
  return (
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
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{item.cardNumber}</td>
              <td className="p-3">{item.fullName}</td>
              <td className="p-3">{item.birthDate}</td>
              <td className="p-3">{item.gradeLevel}</td>
              <td className="p-3">{item.entryDate}</td>
              <td className="p-3">{item.entryTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}