// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/PlayGround" element={<Contact />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}
