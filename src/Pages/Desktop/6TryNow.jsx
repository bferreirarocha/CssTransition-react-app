import { React, useState } from "react";

// import AnitmationPage from "./AnitmationPage";

function TryNow({ ChangePage, nextPath }) {
  const SlideIn = "slideIn";
  const SlideOut = "slideOut";
  const [animate, setAnimate] = useState(true);

  const WheelHandler = (e) => {
    console.log(animate);
    if (e.deltaY > 0 && animate) {
      //   setAnimation(SlideOut);
      ChangePage({ pathname: nextPath, animationProp: SlideOut });
      setAnimate(false);
    } else if (e.deltaY < 0 && animate) {
      console.log("---- (e.deltaY < 0 && animate ----");
      ChangePage({ pathname: -1, animationProp: SlideOut });
      setAnimate(false);
    }
  };
  return (
    // <AnitmationPage>
    <div
      className="page page6"
      style={{ backgroundColor: "#1d2a88", height: "100%" }}
      onWheel={WheelHandler}
    >
      TryNow
    </div>
    // </AnitmationPage>
  );
}

export default TryNow;
