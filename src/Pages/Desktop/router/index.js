import { Route, Routes, useLocation } from "react-router-dom";
import routeDesktop from "./routeDesktop";

import { AnimatePresence } from "framer-motion";

const RouterDesktop = ({ ChangePage }) => {
  const location = useLocation();
  const pageRoutes = routeDesktop.map(
    ({ path, title, Element, nextPath, PreviousPath, Feature }) => {
      return (
        <Route
          key={title}
          path={`/${path}`}
          element={
            <Element
              ChangePage={ChangePage}
              nextPath={nextPath}
              PreviousPath={PreviousPath}
              Layout={Feature}
            />
          }
        />
      );
    }
  );

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {pageRoutes}
      </Routes>
    </AnimatePresence>
  );
};
export default RouterDesktop;
