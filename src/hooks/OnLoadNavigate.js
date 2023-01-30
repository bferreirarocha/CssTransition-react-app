import { useNavigate, createSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { selectCover } from "../Redux/cover/slicer";
import { useSelector } from "react-redux";

const useLoadNavigateTo = (width, query) => {
  const navigate = useNavigate();
  const cover = useSelector(selectCover);

  const checkWidth = () => {
    console.log("useLoadNavigateTo - cover:" + cover);

    if (window.innerWidth < width) {
      navigate({
        pathname: "/m",
        search: `?${createSearchParams({ cover: cover })}`,
      });
    }
    if (window.innerWidth > width) {
      navigate({
        pathname: "/",
        search: `?${createSearchParams({ cover: cover })}`,
      });
    }
  };

  useEffect(() => {
    checkWidth();
    return () => {};
  }, []);
};

export default useLoadNavigateTo;
