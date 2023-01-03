import { React, useState } from "react";

// import AnitmationPage from "./AnitmationPage";

function Start({ ChangePage, nextPath }) {
  const SlideIn = "slideIn";
  const SlideOut = "slideOut";
  const [animate, setAnimate] = useState(true);

  const WheelHandler = (e) => {
    //  console.log("Start:" + animate);
    if (e.deltaY > 0 && animate) {
      // console.log("Start:" + "e.deltaY > 0 && animate");
      ChangePage({ pathname: nextPath, animationProp: SlideOut });
      // console.log("end:" + "e.deltaY > 0 && animate");
    } else if (e.deltaY < 0 && !animate) {
      // console.log("---- (e.deltaY < 0 && animate ----");
      ChangePage({ pathname: -1, animationProp: SlideOut });
    }
    console.log("setAnimate:");

    setAnimate(false);
  };
  return (
    //  <AnitmationPage>
    <div
      className="page page3"
      style={{ backgroundColor: "#e4ff26", height: "100%" }}
      onWheel={WheelHandler}
    >
      Start
    </div>
    //  </AnitmationPage>
  );
}

export default Start;
