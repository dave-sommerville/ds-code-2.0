import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import '../../css/portfolio.css';

function PortfolioFramework({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!items || !items.length) return;

    setImageLoaded(false);
    const img = new Image();
    img.src = items[currentIndex].imgUrl;
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
      <div className="portfolio-wrapper">
        <h3 className="info-title">{imageLoaded ? "Project Preview" : "Loading..."}</h3>
        {imageLoaded && (
          <img
            className="portfolio-preview"
            src={currentItem.imgUrl}
            alt={currentItem.title}
          />
        )}
        <h4 className="portfolio-title">{currentItem.title}</h4>
        <p className="portfolio-description">{currentItem.description}</p>
        <a
          href={currentItem.linkUrl}
          className="btn info-link"
          title="Launch Site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaArrowUpRightFromSquare />
        </a>
      </div>

      <button className="arrow-btn left-btn" onClick={() => adjustIndex('-')}>
        <FaArrowLeft />
      </button>
      <button className="arrow-btn right-btn" onClick={() => adjustIndex('+')}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default PortfolioFramework;
