import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/people?page=1" />} />
      <Route path="/people" element={<Home />} />
    </Routes>
  );
}

export default App;
