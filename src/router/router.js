import DesktopLayout from "../Layouts/Desktop/Index";
import { Styles } from "../types/Styles";
import CoverIndex from "../Layouts/Desktop/Cover/index";
import FeatureIndex from "../Layouts/Desktop/Feature/index";
import Welcome from "../Layouts/Desktop/Welcome";

const routeDesktop = [
  {
    title: "Cover",
    path: "/",
    BaseLayout: DesktopLayout,
    Layout: CoverIndex,
    nextPath: "/Welcome",
    PreviousPath: "/",
    style: Styles.RdnCover,
  },
  {
    title: "Welcome",
    path: "/Welcome",
    BaseLayout: DesktopLayout,
    Layout: Welcome,
    nextPath: "/Start",
    PreviousPath: "/",
    style: Styles.Welcome,
  },
  {
    title: "Cover",
    path: "/Start",
    BaseLayout: DesktopLayout,
    Layout: FeatureIndex,
    nextPath: "/OnTheGo",
    PreviousPath: "/Welcome",
    style: "Start",
  },
  {
    title: "Cover",
    path: "/OnTheGo",
    BaseLayout: DesktopLayout,
    Layout: FeatureIndex,
    nextPath: "/Rdn",
    PreviousPath: "/Start",
    style: "OnTheGo",
  },
  {
    title: "Cover",
    path: "/Rdn",
    BaseLayout: DesktopLayout,
    Layout: FeatureIndex,
    nextPath: "/StayOnDiet",
    PreviousPath: "/OnTheGo",
    style: "Rdn",
  },
  {
    title: "Cover",
    path: "/StayOnDiet",
    BaseLayout: DesktopLayout,
    Layout: FeatureIndex,
    nextPath: "/TryOut",
    PreviousPath: "/Rdn",
    style: "StayOnDiet",
  },
  {
    title: "Cover",
    path: "/TryOut",
    BaseLayout: DesktopLayout,
    Layout: FeatureIndex,
    nextPath: "/",
    PreviousPath: "/StayOnDiet",
    style: "TryOut",
  },
];

export default routeDesktop;
