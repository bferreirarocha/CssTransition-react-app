import { React, useState } from "react";

// import AnitmationPage from "./AnitmationPage";

function Rdn({ ChangePage, nextPath }) {
  const SlideIn = "slideIn";
  const SlideOut = "slideOut";
  const [animate, setAnimate] = useState(true);

  const WheelHandler = (e) => {
    console.log(animate);
    if (e.deltaY > 0 && animate) {
      //   setAnimation(SlideOut);
      setAnimate(false);
      ChangePage({ pathname: nextPath, animationProp: SlideOut });
    } else if (e.deltaY < 0 && animate) {
      console.log("---- (e.deltaY < 0 && animate ----");
      setAnimate(false);
      ChangePage({ pathname: -1, animationProp: SlideIn });
    }
  };
  return (
    // <AnitmationPage>
    <div
      className="page page5"
      style={{ backgroundColor: "#05ab89", height: "100%" }}
      onWheel={WheelHandler}
    >
      Rdn
    </div>
    // </AnitmationPage>
  );
}

export default Rdn;
