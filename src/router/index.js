import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import routeDesktop from "./router";
// import Mobile from "../Layouts/Mobile/Mobile";
import Cover from "../Pages/Desktop/Cover/Index";

const Router = ({ ChangePage, query }) => {
  const location = useLocation();
  const pageDesktopRoutes = routeDesktop.map(
    ({ path, title, BaseLayout, nextPath, PreviousPath, Layout, style }) => {
      return (
        <Route
          key={title}
          exact
          path={`/${path}`}
          element={
            <BaseLayout
              key={title}
              ChangePage={ChangePage}
              nextPath={nextPath}
              PreviousPath={PreviousPath}
              Layout={Layout}
              query={query}
              style={style}
            />
          }
        />
      );
    }
  );
  return (
    <Routes location={location} key={location.pathname}>
      {pageDesktopRoutes}
    </Routes>
  );
};
export default Router;
