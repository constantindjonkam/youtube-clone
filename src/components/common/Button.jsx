import React from "react";

import "./css/button.css";

const Button = ({ children, onClick, active, style }) => {
  return (
    <div
      onClick={onClick}
      className={active ? "button activeBtn" : "button"}
      style={style}
    >
      <p className="text">{children}</p>
    </div>
  );
};

export default Button;
