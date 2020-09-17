import React from "react";

import "./css/tooltip.css";

const Tooltip = ({ children, tooltip }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext">{tooltip}</span>
    </div>
  );
};

export default Tooltip;
