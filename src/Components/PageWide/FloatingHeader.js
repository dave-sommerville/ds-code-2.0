import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import '../../css/floating-header.css';

function FloatingHeader({ showImmediately = false }) {
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(showImmediately);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (showImmediately) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const scrollY = window.scrollY;
      setIsVisible(scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showImmediately]);

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
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/playground" className={({ isActive }) => isActive ? 'active' : ''}>
                Play
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default FloatingHeader;