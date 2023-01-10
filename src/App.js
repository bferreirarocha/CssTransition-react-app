import "./App.scss";
import React, { Fragment, useEffect, navigate, useState } from "react";
// import Mobile from "./Pages/Mobile/Index";
import DesktopRoute from "./router/RouterPage/Desktop";
import useMediaQueryRedirect from "./hooks/MediaQuery";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
// import useCheckWidth from "./hooks/Utils";
import { AnimatePresence } from "framer-motion";

function App() {
  const MediaLayout = () => {
    useMediaQueryRedirect(750);
    return <Outlet />;
  };

  return (
    <Fragment>
      <div className="App">
        <AnimatePresence>
          <Routes>
            <Route element={<MediaLayout />}>
              <Route path="/*" element={<DesktopRoute />} />
              {/* <Route path="*" element={<DesktopRoute />} /> */}
              {/* <Route exact path="/">
                <Navigate to="/dashboard" component={DashboardScreen} />
              </Route> */}
              {/* <Route path="/*" element={<Navigate to="/?cover=Rdn"replace  />} /> */}
              {/* <Route path="/m/*" element={} /> */}
              {/* <Route path="/*" element={<Navigate to="/?cover=Rdn" replace />} /> */}
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </Fragment>
  );
}

export default App;
