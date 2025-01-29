export const handleAdminLogin = (e, adminPassword, setIsAuthenticated, setError) => {
  e.preventDefault();
  if (adminPassword === 'admin123') {
    setIsAuthenticated(true);
  } else {
    setError('Invalid admin password');
  }
};