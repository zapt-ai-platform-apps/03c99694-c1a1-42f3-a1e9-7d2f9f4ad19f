import React from 'react';
import { format } from 'date-fns';
import { handleDelete } from './archiveUtils';

export default function ArchiveTable({ attendances, loading, loadAttendances }) {
  return (
    <>
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
    </>
  );
}