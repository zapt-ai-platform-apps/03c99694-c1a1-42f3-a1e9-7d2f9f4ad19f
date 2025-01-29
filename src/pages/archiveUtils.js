import * as Sentry from '@sentry/browser';

export const fetchAttendances = async (filterDate, setAttendances, setLoading) => {
  try {
    setLoading(true);
    const response = await fetch(`/api/attendance?date=${filterDate}`);
    const result = await response.json();
    setAttendances(result.data);
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error fetching attendance data:', error);
  } finally {
    setLoading(false);
  }
};

export const handleDelete = async (id, callback) => {
  try {
    await fetch(`/api/attendance/${id}`, {
      method: 'DELETE',
    });
    callback();
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error deleting attendance:', error);
  }
};