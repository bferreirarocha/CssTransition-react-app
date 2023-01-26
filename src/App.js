import "./App.scss";
import React, { Fragment, useEffect, useState } from "react";
import DesktopRoute from "./router/RouterPage/Desktop";
import MobileRoute from "./router/RouterPage/Mobile";
import useMediaQueryRedirect from "./hooks/MediaQuery";
import useLoadNavigateTo from "./hooks/OnLoadNavigate";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  const [size, setSize] = useState(930);
  const [query, setQuery] = useState("Rdn");

  const MediaLayout = () => {
    useMediaQueryRedirect(size, query);
    useLoadNavigateTo(size, query);
    return <Outlet />;
  };

  useEffect(() => {
    const querystring = new URLSearchParams(document.location.search);
    const q = querystring.get("cover");
    if (q !== null) {
      setQuery(q);
    }

    return () => {};
  }, []);

  return (
    <Fragment>
      <div className="App">
        {/* <AnimatePresence> */}
        <Routes>
          <Route element={<MediaLayout />}>
            <Route path="/*" element={<DesktopRoute />} />
            <Route path="/m/*" element={<MobileRoute />} />
          </Route>
        </Routes>
        {/* </AnimatePresence> */}
      </div>
    </Fragment>
  );
}

export default App;
