// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroBanner from '../Components/PageWide/HeroBanner';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroBanner />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
