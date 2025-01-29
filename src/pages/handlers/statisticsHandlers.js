export const calculateStatistics = (data) => {
  const totalStudents = data.length;
  const presentCount = data.filter(d => d.status === 'present').length;
  const absentCount = data.filter(d => d.status === 'absent').length;
  
  const dailyAttendance = {
    count: presentCount,
    percentage: totalStudents > 0 ? Math.round((presentCount / totalStudents) * 100) : 0
  };

  const dailyAbsence = {
    count: absentCount,
    percentage: totalStudents > 0 ? Math.round((absentCount / totalStudents) * 100) : 0
  };

  return {
    totalStudents,
    dailyAttendance,
    dailyAbsence,
    monthlyAbsence: { count: 0, percentage: 0 },
    quarterlyAbsence: { count: 0, percentage: 0 },
    yearlyAbsence: { count: 0, percentage: 0 }
  };
};