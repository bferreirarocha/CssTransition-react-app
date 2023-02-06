import {
  useNavigate,
  createSearchParams,
  useMatch,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { selectLaguage } from "../Redux/cover/slicer";
import { useSelector } from "react-redux";

const useMediaQueryRedirect = (width, query) => {
  const language = useSelector(selectLaguage);

  const [searchParams, setSearchParams] = useSearchParams({ cover: query, lang: language });
  const [isMobileMatch, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const checkWidth = () => {
    if (window.innerWidth < width && !isMobileMatch) {
      console.log(searchParams);
      navigate({
        pathname: "/m",
        search: `?${createSearchParams(searchParams)}`,
      });
    } else if (window.innerWidth > width && isMobileMatch) {
      navigate({
        pathname: "/",
        search: `?${createSearchParams(searchParams)}`,
      });
    }
  };

  useEffect(() => {
    // setSearchParams({ cover: query });

    setIsMobile(location === "/m" ? true : false);
    window.addEventListener("resize", checkWidth, { passive: true });
    return () => {
      window.removeEventListener("resize", checkWidth, { passive: true });
    };
  }, [isMobileMatch, navigate, width]);
};

export default useMediaQueryRedirect;
