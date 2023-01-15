import { useNavigate } from "react-router-dom";
import RouterDesktop from "../../router/index";

const DesktopRoute = ({ query }) => {
  const navigate = useNavigate();
  const ChangePage = ({ pathname }) => {
    navigate(pathname);
  };
  return <RouterDesktop ChangePage={ChangePage} query={query}></RouterDesktop>;
};

export default DesktopRoute;
