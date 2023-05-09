import React, { useState } from "react";

const Collapse = (props) => {
  const { label, description } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapsible">
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
          <div className="collapsible-description">{description}</div>
        </div>
      )}
    </div>
  );
};

export default Collapse;
