import { React, useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import MainContent from "./Main";
import Logo from "../../../images/logo2.svg";
import useQueryString from "../../../hooks/QueryString";

function CoverIndex({ NaviateTo }) {
  const [query, setQuery] = useState("Rdn");
  const [slideOut, setSlideOut] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ cover: query });
  useQueryString();
  useEffect(() => {
    // const querystring = new URLSearchParams(document.location.search);
    // const q = querystring.get("cover");

    // if (q !== null) {
    //   setQuery(q);
    // }
    // setSearchParams({ cover: query });
    // navigate({
    //   pathname: "/",
    //   search: `?${createSearchParams(searchParams)}`,
    // });
    setSlideOut(true);

    return () => {};
  }, []);

  const NavigateHandler = (index) => {
    if (index > 0) {
      setSlideOut(false);
      NaviateTo(index);
    }
  };
  const WheelHandler = (e) => {
    // if (e.deltaY > 0) {
    //   setSlideOut(false);
    //   NaviateTo(e.deltaY);
    // }
    NavigateHandler(e.deltaY);
  };
  return (
    <div
      className={`Cover Content ${query} ${
        slideOut ? "SlideEnter" : "SlideExit"
      }`}
      onWheel={WheelHandler}
    >
      <header>
        <div>
          <img src={Logo} />
        </div>
      </header>
      <main>
        <MainContent style={query} NaviateTo={NavigateHandler} />
      </main>
    </div>
  );
}

export default CoverIndex;
