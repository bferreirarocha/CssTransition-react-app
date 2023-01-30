import { useNavigate, createSearchParams } from "react-router-dom";
import RouterDesktop from "../../router/index";
import { useState } from "react";
import { selectCover } from "../../Redux/cover/slicer";
import { useSelector } from "react-redux";
const DesktopRoute = ({ query }) => {
  const cover = useSelector(selectCover);
  //const [defaultQuery, setQefaultQuery] = useState("Rdn");
  //const params = { cover: defaultQuery };
  const navigate = useNavigate();
  //   const ChangePage = ({ pathname }) => {
  //     navigate(pathname);
  //   };
  //alert("Cover DesktopRoute:" + cover);
  const ChangePage = ({ pathname }) => {
    console.log(pathname);

    if (pathname === "/") {
      navigate({
        pathname: "/",
        search: `?${createSearchParams({ cover: cover })}`,
      });
      return;
    }
    navigate({
      pathname: pathname,
    });
  };

  return <RouterDesktop ChangePage={ChangePage} query={query}></RouterDesktop>;
};

export default DesktopRoute;
