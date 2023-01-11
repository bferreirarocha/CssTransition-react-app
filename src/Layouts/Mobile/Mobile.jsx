import { React, useState } from "react";
import "./Mobile.scss";
import classList from "classnames";
import usePageWheelhandler from "../../hooks/WheelHandler";

function Mobile({ Layout, ChangePage, nextPath, PreviousPath, query, style }) {
  const [slideEffect, setSlideEffect] = useState(false);

  const NaviateHandler = (index) => {
    usePageWheelhandler(index, ChangePage, nextPath, PreviousPath);
  };

  return (
    <div className={classList("Mobile")}>
      <Layout
        query={query}
        slide={slideEffect}
        style={style}
        NaviateTo={NaviateHandler}
      />
    </div>
  );
}

export default Mobile;
