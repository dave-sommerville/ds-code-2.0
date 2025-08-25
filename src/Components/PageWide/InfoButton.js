import React, { forwardRef } from "react";

const InfoButton = forwardRef(function InfoButton(
  { label, isActive, onClick, children },
  ref
) {
  return (
    <div
      ref={ref} // 👈 attaches the ref from parent
      className={`info-btn ${isActive ? "expanded" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="splash-link">{label}</div>
      {isActive && <div className="info-expander-inline">{children}</div>}
    </div>
  );
});

export default InfoButton;
