import { React, useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import MainContent from "./Main";
import Logo from "../../images/logo2.svg";

function CoverIndex({ NaviateTo }) {
  const [query, setQuery] = useState("Rdn");
  const [slideOut, setSlideOut] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ cover: query });

  const navigate = useNavigate();

  useEffect(() => {
    const querystring = new URLSearchParams(document.location.search);
    const q = querystring.get("cover");

    if (q !== null) {
      setQuery(q);
    }
    setSearchParams({ cover: query });
    navigate({
      pathname: "/",
      search: `?${createSearchParams(searchParams)}`,
    });
    setSlideOut(true);

    return () => {};
  }, []);

  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      setSlideOut(false);
      NaviateTo(e.deltaY);
    }
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
        <MainContent style={query} />
      </main>
    </div>
  );
}

export default CoverIndex;
