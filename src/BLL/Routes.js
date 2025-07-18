// BLL/Routes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';
import PageLayout from '../Layouts/PageLayout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout><Home /></PageLayout>} />
      <Route path="/portfolio" element={<PageLayout><Portfolio /></PageLayout>} />
      <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
      <Route path="/playground" element={<PageLayout><Contact /></PageLayout>} />
    </Routes>
  );
}
