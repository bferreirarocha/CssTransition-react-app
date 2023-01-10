import { React, useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import HeaderContent from "./Header";
import MainContent from "./Main";

import "./style.scss";

function CoverIndex({ NaviateTo }) {
  const [query, setQuery] = useState("Rdn");
  const [slideEffect, setSlideEffect] = useState(false);
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
    setSlideEffect(true);

    return () => {
      setSlideEffect(false);
    };
  }, []);

  const WheelHandler = () => {
    // setSlideEffect(true);
  };
  return (
    <div
      className={`Cover Content ${query} ${slideEffect ? "SlideEnter" : ""}`}
      onWheel={NaviateTo}
    >
      <header>
        <HeaderContent style={query} />
      </header>
      <main>
        <MainContent style={query} />
      </main>
    </div>
  );
}

export default CoverIndex;
