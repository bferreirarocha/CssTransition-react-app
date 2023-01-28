import { React, useEffect, useState, useMatch } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import MainContent from "./Main";
import Logo from "../../../images/logo2.svg";
import ScrollNavigator from "../../../components/ScrollNavigator/ScrollNavigator";
import ScrollButton from "../../../components/ScrollButton/ScrollButton";

// import OnLoadNavigateTo from "../../../hooks/OnLoadNavigate";
function CoverIndex({ NaviateTo, effect }) {
  const [slideOut, setSlideOut] = useState(false);
  // const navigate = useNavigate();
  const [query, setQuery] = useState("Rdn");
  // const [searchParams, setSearchParams] = useSearchParams({ cover: query });
  useEffect(() => {
    setSlideOut(true);

    const querystring = new URLSearchParams(document.location.search);
    const q = querystring.get("cover");

    if (q !== null) {
      setQuery(q);
    }
    return () => {};
  }, []);

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
      className={`Cover Content ${query} ${
        slideOut ? "SlideEnter" : "SlideExit"
      }`}
      // className={`Cover Content ${query} ${effect}`}
      onWheel={WheelHandler}
    >
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
