import { useNavigate } from "react-router-dom";
import Router from "../../router/index";

const DesktopRoute = ({ query }) => {
  const navigate = useNavigate();
  const ChangePage = ({ pathname }) => {
    navigate(pathname);
  };
  return <Router ChangePage={ChangePage} query={query}></Router>;
};

export default DesktopRoute;
