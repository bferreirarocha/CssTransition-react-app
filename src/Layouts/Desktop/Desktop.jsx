import { React, useState } from "react";
import "./Desktop.scss";
import classList from "classnames";
import usePageWheelhandler from "../../hooks/WheelHandler";

function Desktop({ Layout, ChangePage, nextPath, PreviousPath, query, style }) {
  const [slideEffect, setSlideEffect] = useState(false);

  const NaviateHandler = (index) => {
    usePageWheelhandler(index, ChangePage, nextPath, PreviousPath);
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

export default Desktop;
