import { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoButton from '../PageWide/InfoButton';
import andreReview from '../../media/img/reviews/andre-linked-in-review.png';
import creefordReview from '../../media/img/reviews/creeford-linked-in-review.png';
import gurpreetReview from '../../media/img/reviews/gurpreet-linked-in-review.png';
import samReview from '../../media/img/reviews/sam-linked-in-review.png';
import { ProfileObject } from '../../BLL/Profile';
import ExperienceDisplayList from './ExperienceDisplayList';

function SplashPageFeature() {
  const topLinks = [
    { to: '/about', label: 'Story' },
    { to: '/portfolio', label: 'Work' },
    { to: '/playground', label: 'Play' }
  ];

  const [activeSection, setActiveSection] = useState(null);
  const isAnyExpanded = activeSection !== null;
  const linkedInProfile = ProfileObject.linkedIn.linkUrl;
  console.log(linkedInProfile);
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
            <ul className="reviews-list">
              <li>
                <img src={gurpreetReview}></img>
              </li>
              <li>
                <img src={samReview}></img>
              </li>
              <li>
                <img src={andreReview}></img>
              </li>
              <li>
                <img src={creefordReview}></img>
              </li>
            </ul>
            <a href={linkedInProfile} target="_blank" rel="noopener noreferrer" class="raised-link">View my full LinkedIn here</a>
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
            <ExperienceDisplayList experienceLinks={ProfileObject.certfificates}></ExperienceDisplayList>
          </InfoButton>
        </div>

        {/* <MarqueeText text="Welcome to my world of code • Inspired by curiosity • Driven by coffee ☕ • Always learning •" /> */}
      </div>
    </section>
  );
}

export default SplashPageFeature;
