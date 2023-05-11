import React, { useState } from "react";

const Collapse = ({ label, description, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapsible" style={{ width }}>
      <div className="collapsible-header">
        <div className="collapsible-label">{label}</div>
        <button
          className={`collapsible-toggle ${isOpen ? "open" : "closed"}`}
          onClick={handleToggle}
        >
          <span className="sr-only">{isOpen ? "Collapse" : "Expand"}</span>
        </button>
      </div>
      {isOpen && (
        <div className="collapsible-body">
          <div className="collapsible-description">
            {Array.isArray(description) ? (
              <ul>
                {description.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            ) : (
              description
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapse;
