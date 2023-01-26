import {
  useNavigate,
  useSearchParams,
  createSearchParams,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";

import MobileRdn from "../../Layouts/Mobile/MobileRdn";
import MobileCalories from "../../Layouts/Mobile/MobileCalories";
import MobileBeauty from "../../Layouts/Mobile/MobileBeauty";

const MobileRoute = () => {
  const [query, setQuery] = useState("Rdn");
  const [slideOut, setSlideOut] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams({ cover: query });
  // useQueryString();

  const MediaLayout = () => {
    switch (query) {
      case "Rdn":
        return <MobileRdn query={query} />;
      case "Calories":
        return <MobileCalories query={query} />;
      case "Beauty":
        return <MobileBeauty query={query} />;
      default:
        break;
    }
  };
  useEffect(() => {
    const querystring = new URLSearchParams(document.location.search);
    const q = querystring.get("cover");

    if (q !== null) {
      setQuery(q);
    }
    setSlideOut(true);
    return () => {};
  }, []);

  return <MediaLayout />;
};

export default MobileRoute;
