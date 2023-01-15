import { useNavigate, createSearchParams, useMatch } from "react-router-dom";
import { useEffect } from "react";
// import useCheckWidth from "./Utils";
import useQueryString from "./QueryString";

const useMediaQueryRedirect = (width) => {
  // const params = { cover: "Rdn" };

  // const navigate = useNavigate({
  //   // pathname: "/m",
  //   search: `?${createSearchParams(params)}`,
  // });
  // const isMobileMatch = useMatch("/m");

  // const checkWidth = () => {
  //   if (window.innerWidth < width && !isMobileMatch) {
  //     navigate({
  //       pathname: "/m",
  //       search: `?${createSearchParams(params)}`,
  //     });
  //   }
  //   if (window.innerWidth >= width && isMobileMatch) {
  //     navigate({
  //       pathname: "/",
  //       search: `?${createSearchParams(params)}`,
  //     });
  //     //  alert("PageLaod");
  //   }
  // };
  const queryValue = useQueryString();
  const params = { cover: queryValue };
  const navigate = useNavigate();
  const isMobileMatch = useMatch("/m");

  const checkWidth = () => {
    if (window.innerWidth < width && !isMobileMatch) {
      // alert(params.cover);
      navigate({
        pathname: "/m",
        search: `?${createSearchParams(params)}`,
      });
    }
    if (window.innerWidth >= width && isMobileMatch) {
      // alert(params.cover);

      navigate({
        pathname: "/",
        search: `?${createSearchParams(params)}`,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth, { passive: true });
    //window.addEventListener("load ", checkWidth, { passive: false });
    return () => {
      window.removeEventListener("resize", checkWidth, { passive: true });
      // window.removeEventListener("load ", checkWidth, { passive: false });
    };
  }, [isMobileMatch, navigate, width]);
};

export default useMediaQueryRedirect;
