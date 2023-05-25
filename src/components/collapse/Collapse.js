import React, { useState, useRef, useEffect } from "react";

const Collapse = ({ label, description, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const collapsibleRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        collapsibleRef.current &&
        !collapsibleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="collapsible" style={{ width }} ref={collapsibleRef}>
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
