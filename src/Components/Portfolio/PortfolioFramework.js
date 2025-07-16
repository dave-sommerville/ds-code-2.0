import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './PortfolioFramework.css'; // optional for styling


function PortfolioFramework({portfolioItems}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const currentItem = portfolioItems[currentIndex];

  // Preload all images once
  useEffect(() => {
    const preloadContainer = document.createElement('div');
    preloadContainer.style.display = 'none';
    document.body.appendChild(preloadContainer);

    portfolioItems.forEach((item) => {
      const img = new Image();
      img.src = item.imgUrl;
      preloadContainer.appendChild(img);
    });

    return () => document.body.removeChild(preloadContainer);
  }, []);

  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.src = currentItem.imgUrl;
    img.onload = () => setImageLoaded(true);
  }, [currentIndex]);

  const adjustIndex = (operator) => {
    setCurrentIndex((prevIndex) => {
      if (operator === '+') {
        return (prevIndex + 1) % portfolioItems.length;
      } else if (operator === '-') {
        return (prevIndex - 1 + portfolioItems.length) % portfolioItems.length;
      }
      return prevIndex;
    });
  };

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
