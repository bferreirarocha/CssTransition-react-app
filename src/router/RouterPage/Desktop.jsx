import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import RouterDesktop from "../../router/index";
import { useState } from "react";
const DesktopRoute = ({ query }) => {
  const [defaultQuery, setQefaultQuery] = useState("Rdn");
  const params = { cover: defaultQuery };
  const navigate = useNavigate();
  //   const ChangePage = ({ pathname }) => {
  //     navigate(pathname);
  //   };
  const ChangePage = ({ pathname }) => {
    if (pathname === "/") {
      navigate({
        pathname: "/",
        search: `?${createSearchParams({ cover: "Rdn" })}`,
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
