import { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoButton from '../PageWide/InfoButton';
import andreReview from '../../media/img/reviews/andre-linked-in-review.png';
import creefordReview from '../../media/img/reviews/creeford-linked-in-review.png';
import gurpreetReview from '../../media/img/reviews/gurpreet-linked-in-review.png';
import samReview from '../../media/img/reviews/sam-linked-in-review.png';
import { ProfileObject, learningCertificates } from '../../BLL/Profile';
import LinkListDisplay from '../PageWide/LinkListDisplay';
import MarqueeText from '../PageWide/MarqueeText';

function SplashPageFeature() {
  const topLinks = [
    { to: '/about', label: 'Story' },
    { to: '/portfolio', label: 'Work' },
    { to: '/playground', label: 'Play' }
  ];

  const [activeSection, setActiveSection] = useState(null);
  const isAnyExpanded = activeSection !== null;
  const linkedInProfile = ProfileObject.linkedIn.linkUrl;
  const handleExpand = (section) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  return (
    <section className="home-page">
      <div className="splash-btn-wrapper">
        <div className="splash-item-wrapper">
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
                <img src={creefordReview}></img>
              </li>
              <li>
                <img src={andreReview}></img>
              </li>
              <li>
                <img src={samReview}></img>
              </li>
            </ul>
            <a href={linkedInProfile} target="_blank" rel="noopener noreferrer" class="raised-link">View my full LinkedIn here</a>
          </InfoButton>

          <InfoButton
            label="Experience"
            isActive={activeSection === 'Experience'}
            onClick={() => handleExpand('Experience')}
          >
            <p>
              I have robust experience from a variety of fields,
              each impacting me in a valuable way. My experience includes:
            </p>
            <ul className="experience-list">
              <li>1 Year Programming</li>
              <li>5 Years Management</li>
              <li>10 Years Administrative</li>
              <li className="small-title">Skills</li>
              <li>Technical</li>
              <MarqueeText text=" HTML | CSS | JavaScript | C# | React | SQL | Php | Git | node.js | " />
              <li>Soft</li>
              <MarqueeText text=" Professional | Organized | Efficient | Focused | Adaptable | Personable | Driven | Creative | " />
            </ul>
          </InfoButton>
          <InfoButton
            label="Education"
            isActive={activeSection === 'Education'}
            onClick={() => handleExpand('Education')}
          >
            <p className="small-title">
              Certificate of Software Development
            </p>
            <p>MITT</p>
            <p className="small-title">LinkedIn Learning</p>
            <LinkListDisplay className="linked-cert" linkList={learningCertificates}></LinkListDisplay>
            <a href={linkedInProfile} target="_blank" rel="noopener noreferrer" class="raised-link">View my full LinkedIn here</a>
          </InfoButton>
        </div>

      </div>
    </section>
  );
}

export default SplashPageFeature;
