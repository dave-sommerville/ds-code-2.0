// SplashPageFeature.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoExpander from '../PageWide/InfoExpander';
import MarqueeText from './MarqueeText';

function SplashPageFeature() {
  const topLinks = [
    { to: '/about', label: 'Story' },
    { to: '/portfolio', label: 'Work' },
    { to: '/playground', label: 'Play' },
  ];

  const [activeSection, setActiveSection] = useState(null);

  const handleExpand = (section) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="splash-wrapper">
      <div className="splash-column">
        {topLinks.map((link) => (
          <div key={link.to} className="splash-item">
            <Link to={link.to} className="splash-link">
              {link.label}
            </Link>
          </div>
        ))}
      </div>

      <div className="splash-grid-buttons">
        {['Reviews', 'Experience', 'Education'].map((label) => (
          <button key={label} className="splash-item small" onClick={() => handleExpand(label)}>
            {label}
          </button>
        ))}
        <Link to="/contact" className="splash-item small splash-link">
          Contact
        </Link>
      </div>

      {activeSection && <InfoExpander section={activeSection} />}

      <MarqueeText text="Welcome to my world of code • Inspired by curiosity • Driven by coffee ☕ • Always learning •" />
    </div>
  );
}

export default SplashPageFeature;
