import { useNavigate } from "react-router-dom";
import RouterDesktop from "../../router/index";

import Mobile from "../../Layouts/Mobile/Mobile";

const MobileRoute = ({ query }) => {
  alert(query);
  const navigate = useNavigate();
  const ChangePage = ({ pathname }) => {
    navigate(pathname);
  };
  return <Mobile query={query}></Mobile>;
};

export default MobileRoute;
