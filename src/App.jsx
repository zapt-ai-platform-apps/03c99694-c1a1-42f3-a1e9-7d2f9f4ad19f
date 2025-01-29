import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import Archive from './pages/Archive';
import ControlPanel from './pages/ControlPanel';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <NavBar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stats" element={<Statistics />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/control" element={<ControlPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}