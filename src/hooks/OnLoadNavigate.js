import {
  useNavigate,
  createSearchParams,
  useMatch,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import useQueryString from "./QueryString";

const useLoadNavigateTo = (width, query) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({ cover: query });

  const checkWidth = () => {
    if (window.innerWidth < width) {
      navigate({
        pathname: "/m",
        search: `?${createSearchParams(searchParams)}`,
      });
    }
    if (window.innerWidth > width) {
      console.log("is desktop ");

      navigate({
        pathname: "/",
        search: `?${createSearchParams(searchParams)}`,
      });
    }
  };
  useEffect(() => {
    setSearchParams({ cover: query });
    checkWidth();
  }, []);
};

export default useLoadNavigateTo;
