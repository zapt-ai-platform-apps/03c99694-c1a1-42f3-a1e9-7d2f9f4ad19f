import { authenticateUser } from './_apiUtils.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as Sentry from '@sentry/node';

export default async function handler(req, res) {
  try {
    const user = await authenticateUser(req);
    const date = req.query.date || new Date().toISOString().split('T')[0];

    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);

    const data = await db.query.attendance.findMany({
      where: (attendance, { eq }) => eq(attendance.date, date)
    });

    const stats = {
      totalStudents: data.length,
      dailyAttendance: {
        count: data.filter(d => d.status === 'present').length,
        percentage: Math.round((data.filter(d => d.status === 'present').length / data.length) * 100)
      },
      dailyAbsence: {
        count: data.filter(d => d.status === 'absent').length,
        percentage: Math.round((data.filter(d => d.status === 'absent').length / data.length) * 100)
      },
      monthlyAbsence: { count: 0, percentage: 0 },
      quarterlyAbsence: { count: 0, percentage: 0 },
      yearlyAbsence: { count: 0, percentage: 0 }
    };

    res.status(200).json({ data, stats });
  } catch (error) {
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}