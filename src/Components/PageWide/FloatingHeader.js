import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../../css/index.css';

function FloatingHeader() {
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const scrollY = window.scrollY;

      setIsVisible(scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div ref={headerRef} style={{ position: 'absolute', top: 0 }}></div>

      <nav ref={navRef} className={`floating-nav ${isVisible ? 'visible' : ''}`}>
        <div className="nav-container">
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <NavLink to="/" exact="true" className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                Say Hi
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default FloatingHeader;