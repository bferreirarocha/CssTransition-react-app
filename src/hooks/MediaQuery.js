import { useNavigate, createSearchParams, useMatch } from "react-router-dom";
import { useEffect } from "react";
// import useCheckWidth from "./Utils";

const useMediaQueryRedirect = (width) => {
  const navigate = useNavigate();
  const isMobileMatch = useMatch("/m");
  const params = { cover: "Rdn" };

  const checkWidth = () => {
    if (window.innerWidth < width && !isMobileMatch) {
      // navigate({
      //   pathname: "/m",
      //   search: `?${createSearchParams(params)}`,
      // });
      alert(params);
      navigate("/m");
    }
    if (window.innerWidth >= width && isMobileMatch) {
      // navigate({
      //   pathname: "/",
      //   search: `?${createSearchParams(params)}`,
      // });
      alert("PageLaod");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth, { passive: true });
    //window.addEventListener("load", checkWidth, { passive: false });
    return () => {
      window.removeEventListener("resize", checkWidth, { passive: true });
      // window.removeEventListener("load", checkWidth, { passive: false });
    };
  }, [isMobileMatch, navigate, width]);
};

export default useMediaQueryRedirect;
