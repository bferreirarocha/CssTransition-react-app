import { useNavigate, createSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { selectCover, selectLaguage } from "../Redux/cover/slicer";
import { useSelector } from "react-redux";

const useLoadNavigateTo = (width) => {
  const navigate = useNavigate();
  const cover = useSelector(selectCover);
  const language = useSelector(selectLaguage);

  const checkWidth = () => {
    if (window.innerWidth < width) {
      navigate({
        pathname: "/m",
        search: `?${createSearchParams({ cover: cover, lang: language })}`,
      });
    }
    if (window.innerWidth > width) {
      navigate({
        pathname: "/",
        search: `?${createSearchParams({ cover: cover, lang: language })}`,
      });
    }
  };

  useEffect(() => {
    checkWidth();
    return () => {};
  }, []);
};

export default useLoadNavigateTo;
