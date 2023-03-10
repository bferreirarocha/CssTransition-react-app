import Desktop from "../Layouts/Desktop/Desktop";
import { Styles } from "../types/Styles";
import Cover from "../Pages/Desktop/Cover/Index";
import Start from "../Pages/Desktop/Start";
import OnTheGo from "../Pages/Desktop/OnTheGo";
import StayOnDiet from "../Pages/Desktop/StayOnDiet";
import TryOut from "../Pages/Desktop/TryOut";
import Rdn from "../Pages/Desktop/Rdn";
import Welcome from "../Pages//Desktop/Welcome";

const routeDesktop = [
  {
    title: "Cover",
    path: "/",
    BaseLayout: Desktop,
    Layout: Cover,
    nextPath: "/Welcome",
    PreviousPath: "/",
    style: Styles.RdnCover,
  },
  {
    title: "Welcome",
    path: "/Welcome",
    BaseLayout: Desktop,
    Layout: Welcome,
    nextPath: "/Start",
    PreviousPath: "/",
    style: Styles.Welcome,
  },
  {
    title: "Start",
    path: "/Start",
    BaseLayout: Desktop,
    Layout: Start,
    nextPath: "/OnTheGo",
    PreviousPath: "/Welcome",
    style: Styles.Start,
  },
  {
    title: "OnTheGo",
    path: "/OnTheGo",
    BaseLayout: Desktop,
    Layout: OnTheGo,
    nextPath: "/Rdn",
    PreviousPath: "/Start",
    style: Styles.OnTheGo,
  },
  {
    title: "Rdn",
    path: "/Rdn",
    BaseLayout: Desktop,
    Layout: Rdn,
    nextPath: "/StayOnDiet",
    PreviousPath: "/OnTheGo",
    style: Styles.Rdn,
  },
  {
    title: "StayOnDiet",
    path: "/StayOnDiet",
    BaseLayout: Desktop,
    Layout: StayOnDiet,
    nextPath: "/TryOut",
    PreviousPath: "/Rdn",
    style: Styles.StayOnDiet,
  },
  {
    title: "TryOut",
    path: "/TryOut",
    BaseLayout: Desktop,
    Layout: TryOut,
    nextPath: "/",
    PreviousPath: "/StayOnDiet",
    style: Styles.TryOut,
  },
];

export default routeDesktop;
