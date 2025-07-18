// Layouts/PageLayout.jsx
import HeroBanner from '../Components/PageWide/HeroBanner';
import FloatingHeader from '../Components/PageWide/FloatingHeader';
import Footer from '../Components/PageWide/Footer';
import { useLocation } from 'react-router-dom';

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      {isHome && <HeroBanner />}
      <FloatingHeader showImmediately={!isHome} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
