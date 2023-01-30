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
  const querystring = new URLSearchParams(document.location.search);
  const q = querystring.get("cover");
  const cover = useSelector(selectCover);
  const [size, setSize] = useState(930);
  const dispatch = useDispatch();

  const UpdateCover = () => {
    // console.log("cover querystring:" + q);

    if (q !== null) {
      if (q === "Rdn" || q === "Calories" || q === "Beauty") {
        dispatch(setCover(q));
      } else {
        return;
      }
    }
  };
  const MediaLayout = () => {
    useMediaQueryRedirect(size, cover);
    // useLoadNavigateTo(size, cover);
    useLoadNavigateTo(size);
    return <Outlet />;
  };

  useEffect(() => {
    UpdateCover();

    return () => {};
  }, []);

  return (
    <Fragment>
      <div className="App">
        {/* <AnimatePresence> */}
        <Routes>
          <Route element={<MediaLayout />}>
            <Route path="/*" element={<DesktopRoute query={cover} />} />
            <Route path="/m/*" element={<MobileRoute query={cover} />} />
          </Route>
        </Routes>
        {/* </AnimatePresence> */}
      </div>
    </Fragment>
  );
}

export default App;
