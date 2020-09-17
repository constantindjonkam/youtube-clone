import React from "react";
import "./css/notFoundPage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFoundPage({ className = "" }) {
  useEffect(() => {
    document.title = "404 Not Found";

    return function clear() {
      document.title = "YouTube";
    };
  });

  return (
    <div className={"notfoundpage " + className}>
      <div className="notfoundpage__box">
        <img src={require("./images/monkey.png")} alt="Not Found" />
        <div>
          <p>This page isn't available. Sorry about that.</p>
          <p>Try searching for something else.</p>
        </div>
        <div className="notfoundpage__container">
          <Link to="/">
            <div className="notfoundpage__logo"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
