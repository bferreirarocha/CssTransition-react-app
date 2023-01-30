import "./App.scss";
import React, { Fragment, useEffect, useState } from "react";
import DesktopRoute from "./router/RouterPage/Desktop";
import MobileRoute from "./router/RouterPage/Mobile";
import useMediaQueryRedirect from "./hooks/MediaQuery";
import useLoadNavigateTo from "./hooks/OnLoadNavigate";
import { Routes, Route, Outlet } from "react-router-dom";
import { selectCover, setCover } from "./Redux/cover/slicer";
import { useSelector, useDispatch } from "react-redux";
import useRedirect from "./hooks/OnRedirect";

function App() {
  const cover = useSelector(selectCover);
  const dispatch = useDispatch();
  const [size, setSize] = useState(930);
  //const [query, setQuery] = useState("Rdn");

  const MediaLayout = () => {
    useRedirect();
    useMediaQueryRedirect(size, cover);
    useLoadNavigateTo(size, cover);
    return <Outlet />;
  };

  useEffect(() => {
    // const querystring = new URLSearchParams(document.location.search);
    // const q = querystring.get("cover");

    // if (q !== null) {
    //   if (q === "Rdn" || q === "Calories" || q === "Beauty") {
    //     console.log(q);
    //     dispatch(setCover(q));
    //   } else {
    //     dispatch(setCover("Rdn"));
    //   }
    // }
    return () => {
      console.log("APP: umounted");
    };
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
