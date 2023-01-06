import Cover from "../components/1Cover";
import Welcome from "../components/2Welcome";
import Start from "../components/3Start";
import OnTheGo from "../components/4OnTheGo";
import Rdn from "../components/5Rdn";
import TryNow from "../components/6TryNow";
import Feature from "../Layout/Feature";

const routeDesktop = [
  {
    title: "DesktopIndex",
    Element: Cover,
    nextPath: "/Welcome",
    path: "/",
  },
  {
    title: "Welcome",
    path: "/Welcome",
    Element: Welcome,
    nextPath: "/Start",
    PreviousPath: "/",
  },
  {
    title: "Start",
    path: "/Start",
    Element: Start,
    nextPath: "/OnTheGo",
    PreviousPath: "/Welcome",
    Layout: Feature,
  },
  {
    title: "OnTheGo",
    path: "/OnTheGo",
    Element: OnTheGo,
    nextPath: "/Rdn",
    PreviousPath: "/Start",
    Layout: Feature,
  },
  {
    title: "Rdn",
    path: "/Rdn",
    Element: Rdn,
    nextPath: "/TryNow",
    PreviousPath: "/OnTheGo",
    Layout: Feature,
  },
  {
    title: "TryNow",
    path: "/TryNow",
    Element: TryNow,
    nextPath: "/",
    PreviousPath: "/Rdn",
  },
];

export default routeDesktop;
