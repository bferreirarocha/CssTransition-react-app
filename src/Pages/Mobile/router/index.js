import { Route, Routes, useLocation } from "react-router-dom";
import routerMobile from "./routerMobile";

import { AnimatePresence } from "framer-motion";

const RouterMobile = ({ ChangePage }) => {
  const location = useLocation();
  const pageRoutes = routerMobile.map(
    ({ path, title, Element, nextPath, PreviousPath }) => {
      return (
        <Route
          key={title}
          path={`/${path}`}
          element={
            <Element
            //   ChangePage={ChangePage}
            //   nextPath={nextPath}
            //   PreviousPath={PreviousPath}
            />
          }
          to={"/m"}
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
export default RouterMobile;
