import { React, useEffect, useState, useRef } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import MainContent from "./Main";
import Logo from "../../../images/logo2.svg";

import ScrollNavigator from "../../../components/ScrollNavigator/ScrollNavigator";
import ScrollButton from "../../../components/ScrollButton/ScrollButton";
import { selectCover } from "../../../Redux/cover/slicer";
import { useSelector } from "react-redux";

// import OnLoadNavigateTo from "../../../hooks/OnLoadNavigate";
function CoverIndex({ NaviateTo, query }) {
  const cover = useSelector(selectCover);

  const [slideOut, setSlideOut] = useState(false);
  const [bgImageLoaded, setBgImageLoaded] = useState(true);
  // const image = `/images/covers/${cover}.jpg`;
  const element = useRef(null);
  useEffect(() => {
    setSlideOut(true);
    // SetBgImage();
    return () => {};
  }, []);

  // const SetBgImage = () => {
  //   load(image).then(() => {
  //     setBgImageLoaded(false);
  //     setTimeout(() => {
  //       // element.current.style.backgroundImage = `url(${image})`;
  //     }, 0);
  //   });
  // };

  function load(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", resolve);
      image.addEventListener("error", reject);
      image.src = src;
    });
  }
  const NavigateHandler = (index) => {
    if (index > 0) {
      setSlideOut(false);
      NaviateTo(index);
    }
  };
  const WheelHandler = (e) => {
    NavigateHandler(e.deltaY);
  };

  return (
    <div
      className={`Cover Content ${query} ${slideOut ? "SlideEnter" : "SlideExit"}`}
      onWheel={WheelHandler}
      ref={element}
    >
      {/* <img src={`/images/covers/${cover}.jpg`} alt="" onLoad={OnLoadhandler} /> */}

      <header>
        <div>
          <img src={Logo} />
        </div>
      </header>
      <main>
        <MainContent style={query} NaviateTo={NavigateHandler} />
        <ScrollNavigator index={0} />
      </main>
    </div>
  );
}

export default CoverIndex;
