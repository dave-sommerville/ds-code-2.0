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
            <div className="flex">

              <ul className="xp-list">
                <li className="xp-title">Development Skills</li>
                <li>HTML/CSS, JavaScript, C#, React</li>
                <li>ASP.NET Core, REST APIs</li>
                <li>SQL, MySQL</li>
                <li>Git, GitHub</li>
                <li>VS Code, Visual Studio</li>
                <li>NUnit, Moq</li>
              </ul>
              <ul className="xp-list">
                  <li className="xp-title">Tools &amp; Platforms</li>
                <li>Power Automate</li>
                <li>Jira</li>
                <li>SOAP UI</li>
                <li>PeopleSoft</li>
                <li>SharePoint</li>
                <li>Verint</li>
              </ul>
              <ul className="xp-list">
                  <li className="xp-title">Soft Skills</li>
                <li>Driven</li>
                <li>Adaptable</li>
                <li>Professional</li>
                <li>Efficient</li>
                <li>Organized</li>
                <li>Personable</li>
              </ul>
            </div>
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
