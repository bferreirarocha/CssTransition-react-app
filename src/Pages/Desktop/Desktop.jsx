import "./Desktop.scss";
// import Router from "./router/index";
import { useNavigate } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import Cover from "./components/1Cover";
// import Welcome from "./components/2Welcome";
// import Start from "./components/3Start";
// import OnTheGo from "./components/4OnTheGo";
// import Rdn from "./components/5Rdn";
// import TryNow from "./components/6TryNow";
import RouterDesktop from "./router/index";

const Desktop = () => {
  const navigate = useNavigate();
  const ChangePage = ({ pathname }) => {
    navigate(pathname);
  };
  return (
    <div className="Desktop">
      <RouterDesktop ChangePage={ChangePage}></RouterDesktop>
    </div>
  );
};

export default Desktop;
