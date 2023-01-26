import {
  useNavigate,
  createSearchParams,
  useMatch,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

const useMediaQueryRedirect = (width, query) => {
  const [searchParams, setSearchParams] = useSearchParams({ cover: query });
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
    setIsMobile(location === "/m" ? true : false);
    window.addEventListener("resize", checkWidth, { passive: true });
    return () => {
      window.removeEventListener("resize", checkWidth, { passive: true });
    };
  }, [isMobileMatch, navigate, width]);
};

export default useMediaQueryRedirect;
