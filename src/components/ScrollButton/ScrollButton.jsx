import React from "react";
import "./ScrollButton.scss";
function ScrollButton() {
  return (
    <div className="ScrollButton">
      <div class="container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
      <span class="text">Scroll down</span>
    </div>
  );
}

export default ScrollButton;
