import { useState } from 'react';
import { Link } from 'react-router-dom';
import MarqueeText from './MarqueeText';

function SplashPageFeature() {
  const topLinks = [
    { to: '/about', label: 'Story' },
    { to: '/portfolio', label: 'Work' },
    { to: '/playground', label: 'Play' }
  ];

  const [activeSection, setActiveSection] = useState(null);

  const contentMap = {
    Reviews: "Here are some kind words from collaborators and clients.",
    Experience: "I’ve worked on a wide range of web and software projects.",
    Education: "I’ve studied Computer Science and completed various certifications."
  };

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
          <div
            key={label}
            className={`splash-item small ${activeSection === label ? 'expanded' : ''}`}
            onClick={() => handleExpand(label)}
            style={{ cursor: 'pointer' }}
          >
            <div className="splash-link">{label}</div>
            {activeSection === label && (
              <div className="info-expander-inline">
                <p>{contentMap[label]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <MarqueeText text="Welcome to my world of code • Inspired by curiosity • Driven by coffee ☕ • Always learning •" />
    </div>
  );
}

export default SplashPageFeature;
