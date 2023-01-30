import { useNavigate, createSearchParams } from "react-router-dom";
import { useEffect } from "react";

const useLoadNavigateTo = (width, query) => {
  const navigate = useNavigate();

  const checkWidth = () => {
    if (window.innerWidth < width) {
      navigate({
        pathname: "/m",
        search: `?${createSearchParams({ cover: query })}`,
      });
    }
    if (window.innerWidth > width) {
      navigate({
        pathname: "/",
        search: `?${createSearchParams({ cover: query })}`,
      });
    }
  };
  useEffect(() => {
    // setSearchParams({ cover: query });
    console.log("useLoadNavigateTo  Mounted");
    checkWidth();
  }, []);
};

export default useLoadNavigateTo;
