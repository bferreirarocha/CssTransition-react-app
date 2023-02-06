import "./App.scss";
import React, { Fragment, useEffect, useState } from "react";
import DesktopRoute from "./router/RouterPage/Desktop";
import MobileRoute from "./router/RouterPage/Mobile";
import useMediaQueryRedirect from "./hooks/MediaQuery";
import useLoadNavigateTo from "./hooks/OnLoadNavigate";
import { Routes, Route, Outlet } from "react-router-dom";
import { selectCover, setCover, selectLaguage, setLanguage } from "./Redux/cover/slicer";
import { useSelector, useDispatch } from "react-redux";
import useRedirect from "./hooks/OnRedirect";
import { Themes } from "./types/Styles";

function App() {
  const querystring = new URLSearchParams(document.location.search);
  const c = querystring.get("cover");
  const l = querystring.get("lang");
  const cover = useSelector(selectCover);
  const language = useSelector(selectLaguage);

  const [size, setSize] = useState(930);
  const dispatch = useDispatch();

  const UpdateStore = () => {
    if (c !== null) {
      if (c === Themes.Rdn || c === Themes.Beauty || c === Themes.Calories) {
        dispatch(setCover(c));
      } else {
        return;
      }
    }

    // if (c !== null) {
    //   if (c === "Rdn" || c === "Beauty" || c === "Calories") {
    //     dispatch(setCover(c));
    //   } else {
    //     return;
    //   }
    // }

    if (l !== null) {
      if (l === "en" || l === "it") {
        dispatch(setLanguage(l));
        console.log(language);
      } else {
        return;
      }
    }
  };
  const MediaLayout = () => {
    useMediaQueryRedirect(size, cover);
    useLoadNavigateTo(size);
    return <Outlet />;
  };

  useEffect(() => {
    UpdateStore();
    return () => {};
  }, []);

  return (
    <Fragment>
      <div className='App'>
        {/* <AnimatePresence> */}
        <Routes>
          <Route element={<MediaLayout />}>
            <Route path='/*' element={<DesktopRoute query={cover} />} />
            <Route path='/m/*' element={<MobileRoute query={cover} />} />
          </Route>
        </Routes>
        {/* </AnimatePresence> */}
      </div>
    </Fragment>
  );
}

export default App;
