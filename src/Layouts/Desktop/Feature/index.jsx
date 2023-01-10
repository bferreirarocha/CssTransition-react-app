import { React, useState, useEffect } from "react";

import HeaderContent from "./Header";
import MainContent from "./Main";
import classList from "classnames";
import "./style.scss";

function FeatureIndex({ style, NaviateTo }) {
  const [slideEffect, setSlideEffect] = useState(false);

  useEffect(() => {
    setSlideEffect(true);
    // alert(slide);
    return () => {
      setSlideEffect(false);
    };
  }, []);

  return (
    <div
      className={`Feature Content ${style} ${slideEffect ? "SlideEnter" : ""}`}
      onWheel={NaviateTo}
    >
      <header>
        <HeaderContent style={style} />
      </header>
      <main>
        <MainContent style={style} />
      </main>
    </div>
  );
}

export default FeatureIndex;
