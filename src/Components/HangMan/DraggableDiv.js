import React, { useEffect, useRef } from 'react';
import '../../css/hangman.css';

function DraggablePopup({ children, onClose }) {
  const popupRef = useRef(null);
  const dragBarRef = useRef(null);

  useEffect(() => {
    const popup = popupRef.current;
    const drag = dragBarRef.current;
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      offsetX = e.clientX - popup.offsetLeft;
      offsetY = e.clientY - popup.offsetTop;
    };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      popup.style.left = `${e.clientX - offsetX}px`;
      popup.style.top = `${e.clientY - offsetY}px`;
    };
    const onMouseUp = () => (isDragging = false);

    drag.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      drag.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className="pop-out" ref={popupRef}>
      <div className="top-bar flex">
        <div className="drag-bar" ref={dragBarRef}></div>
        <div className="exit-game pointer" onClick={onClose}>
          &times;
        </div>
      </div>
      {children}
    </div>
  );
}

export default DraggablePopup;
