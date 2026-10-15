import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import Loans from './pages/Loans';
import Reservations from './pages/Reservations';
import Fines from './pages/Fines';
import Users from './pages/Users';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="resources" element={<Resources />} />
          <Route path="loans" element={<Loans />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="fines" element={<Fines />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
