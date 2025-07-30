import React, { useEffect, useState } from 'react';
import { FaSquareCaretRight, FaSquareCaretLeft, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import {Link} from 'react-router-dom';
import '../../css/portfolio.css';

function PortfolioFramework({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

useEffect(() => {
  if (!items || !items.length) return;

  // Clamp the currentIndex to stay in bounds after items change
  setCurrentIndex((prev) => {
    if (prev >= items.length) return 0;
    return prev;
  });

  // Only load image if currentItem is valid
  const currentItem = items[currentIndex];
  if (!currentItem) return;

  setImageLoaded(false);
  const img = new Image();
  img.src = currentItem.imgUrl;
  img.onload = () => setImageLoaded(true);
}, [items, currentIndex]);


  const adjustIndex = (operator) => {
    setCurrentIndex((prevIndex) => {
      if (operator === '+') {
        return (prevIndex + 1) % items.length;
      } else if (operator === '-') {
        return (prevIndex - 1 + items.length) % items.length;
      }
      return prevIndex;
    });
  };

  if (!items || !items.length) {
    return <p>No portfolio items to display.</p>;
  }

  const currentItem = items[currentIndex];

  return (
    <div className="portfolio-framework">
        <h3 className="info-title">{imageLoaded ? "" : "Loading..."}</h3>
        {imageLoaded && (
          <img
            className="portfolio-preview"
            src={currentItem.imgUrl}
            alt={currentItem.title}
          />
        )}
        <h4 className="portfolio-title">{currentItem.title}</h4>
        <p className="portfolio-description">{currentItem.description}</p>
{currentItem.collaborators && currentItem.collaborators.length > 0 && (
  <Link to={`/collaborators`} className="collaborators-list-link">
    <div className="collaborators-list">
      <small>Collaborators:</small>
      <ul>
        {currentItem.collaborators.map((collaborator, index) => (
          <li key={index}>{collaborator}</li>
        ))}
      </ul>
    </div>
  </Link>
)}
        <a
          href={currentItem.linkUrl}
          className="btn info-link"
          title="Launch Site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaArrowUpRightFromSquare />
        </a>
        <FaSquareCaretLeft className="arrow-btn left-btn icon-hover" onClick={() => adjustIndex('-')}/>
        <FaSquareCaretRight className="arrow-btn right-btn icon-hover" onClick={() => adjustIndex('+')} />
      </div>
  );
}

export default PortfolioFramework;
