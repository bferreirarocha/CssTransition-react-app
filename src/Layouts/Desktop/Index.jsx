import { React, useState } from "react";
import "./Index.scss";
import classList from "classnames";
import usePageWheelhandler from "././../../hooks/WheelHandler";

function Index({ Layout, ChangePage, nextPath, PreviousPath, query, style }) {
  const [slideEffect, setSlideEffect] = useState(false);

  const WheelHandler = (e) => {
    usePageWheelhandler(e, ChangePage, nextPath, PreviousPath);
    // setSlideEffect(true);
  };
  const NaviateHandler = (e) => {
    usePageWheelhandler(e, ChangePage, nextPath, PreviousPath);
    // setSlideEffect(true);
  };

  return (
    <div className={classList("Desktop")}>
      <Layout
        query={query}
        slide={slideEffect}
        style={style}
        NaviateTo={NaviateHandler}
      />
    </div>
  );
}

export default Index;
