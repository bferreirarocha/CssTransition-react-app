import "./App.scss";
import React, { Fragment, useEffect, navigate, useState } from "react";
// import Mobile from "./Pages/Mobile/Index";
import DesktopRoute from "./router/RouterPage/Desktop";
import MobileRoute from "./router/RouterPage/Mobile";
import Mobile from "./Layouts/Mobile/Mobile";
import useMediaQueryRedirect from "./hooks/MediaQuery";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
// import useCheckWidth from "./hooks/Utils";
import { AnimatePresence } from "framer-motion";
import useQueryString from "./hooks/QueryString";

function App() {
  const MediaLayout = () => {
    useMediaQueryRedirect(822);
    return <Outlet />;
  };

  return (
    <Fragment>
      <div className="App">
        {/* <AnimatePresence> */}
        <Routes>
          <Route element={<MediaLayout />}>
            <Route path="/*" element={<DesktopRoute />} />
            <Route path="/m/*" element={<Mobile />} />
          </Route>
        </Routes>
        {/* </AnimatePresence> */}
      </div>
    </Fragment>
  );
}

export default App;
