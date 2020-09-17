import React from "react";

import "./css/seperator.css";

const Separator = ({ marginTop = 0, marginBottom = 0, marginVertical = 0 }) => {
  return (
    <div
      style={
        marginVertical
          ? { marginTop: marginVertical, marginBottom: marginVertical }
          : { marginTop, marginBottom }
      }
      className="separator"
    ></div>
  );
};

export default Separator;
