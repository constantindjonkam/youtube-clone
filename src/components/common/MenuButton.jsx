import React from "react";

import "./css/menuButton.css";

const MenuButton = ({ Icon, title, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={active ? "menuButton active" : "menuButton"}
    >
      <Icon className="menuButton__icon" />
      <p className="menuButton__title">{title}</p>
    </div>
  );
};

export default MenuButton;
