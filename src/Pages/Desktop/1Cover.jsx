import { React, useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

function Cover({ ChangePage, nextPath }) {
  const animation = "slideOut";
  const [slideOut, setSlideOut] = useState(true);
  const [slideIn, setSlideIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setSlideOut(true);
  }, []);
  console.log("CoverPage sterted: " + slideOut);
  const WheelHandler = (e) => {
    if (e.deltaY > 0 && slideOut) {
      try {
        navigate(1);
        console.log(`navigate to ${nextPath} - end: `);
        setSlideOut(false);
        console.log("setSlideOut: " + slideOut);
      } catch (error) {
        console.log(error);
      }
      return;
    } else {
    }
  };

  return (
    //<AnitmationPage>
    <div
      className="page page1"
      style={{ backgroundColor: "White", height: "100%" }}
      onWheel={WheelHandler}
    >
      Cover
    </div>
    // </AnitmationPage>
  );
}

export default Cover;
