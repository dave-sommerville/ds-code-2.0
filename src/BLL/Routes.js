// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import PlayGround from '../Pages/PlayGround';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Playground" element={<PlayGround />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}
