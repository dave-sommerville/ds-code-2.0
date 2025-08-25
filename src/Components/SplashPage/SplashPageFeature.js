import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoButton from '../PageWide/InfoButton';
import andreReview from '../../media/img/reviews/andre-linked-in-review.png';
import creefordReview from '../../media/img/reviews/creeford-linked-in-review.png';
import gurpreetReview from '../../media/img/reviews/gurpreet-linked-in-review.png';
import samReview from '../../media/img/reviews/sam-linked-in-review.png';
import { ProfileObject, learningCertificates } from '../../BLL/Profile';
import LinkListDisplay from '../PageWide/LinkListDisplay';

function SplashPageFeature() {
  const topLinks = [
    { to: '/about', label: 'Story' },
    { to: '/portfolio', label: 'Work' },
    { to: '/playground', label: 'Play' }
  ];

  const [activeSection, setActiveSection] = useState(null);

  // refs for InfoButtons
  const reviewsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const linkedInProfile = ProfileObject.linkedIn.linkUrl;
  const resume = ProfileObject.resume;

  const handleExpand = (section) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

// useEffect(() => {
//   const refs = {
//     Reviews: reviewsRef,
//     Experience: experienceRef,
//     Education: educationRef,
//   };

//   const el = refs[activeSection]?.current;
//   if (!el) return;

//   // Wait for the browser to render the expanded height
//   const scrollToCenter = () => {
//     const rect = el.getBoundingClientRect();
//     const scrollTop = window.scrollY + rect.top;
//     const elementCenter = scrollTop + rect.height / 2;
//     const viewportCenter = window.innerHeight / 2;

//     window.scrollTo({
//       top: elementCenter - viewportCenter,
//       behavior: "smooth",
//     });
//   };

//   // Using two RAFs ensures the DOM updates fully
//   requestAnimationFrame(() => requestAnimationFrame(scrollToCenter));

// }, [activeSection]);


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

        <div className={`splash-info-btn-wrapper ${activeSection ? 'open' : ''}`}>
          <InfoButton
            ref={reviewsRef}
            label="Reviews"
            isActive={activeSection === 'Reviews'}
            onClick={() => handleExpand('Reviews')}
          >
            <ul className="reviews-list">
              <li><img src={gurpreetReview} alt="Review 1" /></li>
              <li><img src={creefordReview} alt="Review 2" /></li>
              <li><img src={andreReview} alt="Review 3" /></li>
              <li><img src={samReview} alt="Review 4" /></li>
            </ul>
            <a href={linkedInProfile} target="_blank" rel="noopener noreferrer" className="raised-link">
              View my full LinkedIn here
            </a>
          </InfoButton>

          <InfoButton
            ref={experienceRef}
            label="Experience"
            isActive={activeSection === 'Experience'}
            onClick={() => handleExpand('Experience')}
          >
            <ul>
              <li>
                Although a recent graduate, I've expanded my experience including:
              </li>
              <li>
                Building and delivering multiple full-stack and front-end projects, taking them from concept through design, development, testing, and deployment.
              </li>
              <li>
                Collaborating with clients, showcasing public demos, and founding community open-source initiatives, demonstrating adaptability, product-minded 
                development, and end-to-end workflow experience.
              </li>
            </ul>
            <div className="flex col">
              <ul className="xp-list">
                <li className="xp-title">Dev Skills</li>
                <li>HTML/CSS</li>
                <li>JavaScript, C#</li>
                <li>ASP.NET EF Core</li>
                <li>React, SQL, MySQL</li>
                <li>REST APIs, Git</li>
                <li>NUnit, Moq</li>
              </ul>
              <ul className="xp-list">
                <li className="xp-title">Tools &amp; GUIs</li>
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
            <ul>
              <li>Experience by Field:</li>
              <li>6 years Management</li>
              <li>8 years Sales/Hospitality</li>
              <li>9 years Administration</li>
            </ul>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="raised-link">
                View my Resume here
              </a>
          </InfoButton>

          <InfoButton
            ref={educationRef}
            label="Education"
            isActive={activeSection === 'Education'}
            onClick={() => handleExpand('Education')}
          >
            <p className="xp-title">Manitoba Institute of Trades and Technology</p>
            <p className="mb-25">Certificate of Software Development</p>
            <p className="xp-title">LinkedIn Learning</p>
            <LinkListDisplay classTitle="linked-cert mb-25" linkList={learningCertificates} />
            <a href={linkedInProfile} target="_blank" rel="noopener noreferrer" className="raised-link">
              View my full LinkedIn here
            </a>
          </InfoButton>
        </div>
      </div>
    </section>
  );
}

export default SplashPageFeature;
