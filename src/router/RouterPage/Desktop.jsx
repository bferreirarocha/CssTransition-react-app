import { useNavigate, createSearchParams } from "react-router-dom";
import RouterDesktop from "../../router/index";
import { useState } from "react";
import { selectCover } from "../../Redux/cover/slicer";
import { useSelector } from "react-redux";
import useRedirect from "../../hooks/OnRedirect";

const DesktopRoute = ({ query }) => {
  // useRedirect();
  console.log(query);
  const cover = useSelector(selectCover);
  const navigate = useNavigate();

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
