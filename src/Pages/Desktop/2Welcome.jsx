import { React, useEffect, useState } from "react";
import { useLocation, matchRoutes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Welcome({ ChangePage, nextPath, animate, stopAnimation }) {
  const navigate = useNavigate();
  const [slideOut, setSlideOut] = useState(true);
  const [slideIn, setSlideIn] = useState(true);
  console.log("WelcomePage sterted: " + slideOut);

  useEffect(() => {
    setSlideOut(true);
  }, []);
  const WheelHandler = (e) => {
    e.stopPropagation();
    if (e.deltaY > 0 && slideOut) {
      try {
        navigate(nextPath);
        console.log(`navigate to ${nextPath} - end: `);
        setSlideOut(false);
        console.log("setSlideOut: " + slideOut);
      } catch (error) {
        console.log(error);
      }
    } else if (e.deltaY < 0 && slideIn) {
      try {
        navigate(-1);
        console.log(`navigate to ${"/Cover"} - end: `);
        setSlideIn(false);
        console.log("setSlideIn: " + slideIn);
      } catch (error) {
        console.log(error);
      }
    }
  };

  //setAnimate(false);

  return (
    //<AnitmationPage>
    <div
      className="page page2"
      style={{ backgroundColor: "#e4ff26", height: "100%" }}
      onWheel={WheelHandler}
    >
      Welcome
    </div>
    // </AnitmationPage>
  );
}

export default Welcome;
