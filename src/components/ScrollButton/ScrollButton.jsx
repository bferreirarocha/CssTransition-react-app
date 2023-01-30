import React from "react";
import "./ScrollButton.scss";
function ScrollButton() {
  return (
    <div className="ScrollButton">
      <div className="container">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
      <span className="text">
        Scroll
        <br />
        down
      </span>
    </div>
  );
}

export default ScrollButton;
