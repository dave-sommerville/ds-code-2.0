// MarqueeText.jsx
function MarqueeText({ text }) {
  return (
    <div className="marquee-container">
      <div className="marquee">{text}</div>
    </div>
  );
}

export default MarqueeText;
