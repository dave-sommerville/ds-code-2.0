import { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoButton from '../PageWide/InfoButton';
import andrePreview from '../../media/img/reviews/andre-linked-in-review.png'
function SplashPageFeature() {
  const topLinks = [
    { to: '/about', label: 'Story' },
    { to: '/portfolio', label: 'Work' },
    { to: '/playground', label: 'Play' }
  ];

  const [activeSection, setActiveSection] = useState(null);
  const isAnyExpanded = activeSection !== null;

  const handleExpand = (section) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  return (
    <section className="home-page">
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

        <div className={`splash-info-btn-wrapper ${isAnyExpanded ? 'open' : ''}`}>
          <InfoButton
            label="Reviews"
            isActive={activeSection === 'Reviews'}
            onClick={() => handleExpand('Reviews')}
          >
            <ul>
              <img src={andrePreview}></img>
            </ul>
            <a href="https://ds-code.ca" class="raised-link">Click Here</a>
          </InfoButton>

          <InfoButton
            label="Experience"
            isActive={activeSection === 'Experience'}
            onClick={() => handleExpand('Experience')}
          >
            <div className="experience-gallery">
              <img src="/images/project1.png" alt="Project 1" />
              <img src="/images/project2.png" alt="Project 2" />
            </div>
          </InfoButton>

          <InfoButton
            label="Education"
            isActive={activeSection === 'Education'}
            onClick={() => handleExpand('Education')}
          >
          </InfoButton>
        </div>

        {/* <MarqueeText text="Welcome to my world of code • Inspired by curiosity • Driven by coffee ☕ • Always learning •" /> */}
      </div>
    </section>
  );
}

export default SplashPageFeature;
