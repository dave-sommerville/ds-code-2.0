function InfoButton({ label, isActive, onClick, children }) {
  return (
    <div
      className={`info-btn ${isActive ? 'expanded' : ''}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
    <div className="splash-link">{label}</div>
      {isActive && (
        <div className="info-expander-inline">
          {children}
        </div>
      )}
    </div>
  );
}
export default InfoButton;