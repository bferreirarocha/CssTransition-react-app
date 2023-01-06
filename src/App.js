import "./App.scss";
import React, { Fragment, useEffect } from "react";
import Mobile from "./Pages/Mobile/Index";
import Desktop from "./Pages/Desktop/Desktop";
import { useMediaQuery } from "./hooks/MediaQuery";
import { useNavigate, Navigate, Routes, Route } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const isBreakpoint = useMediaQuery(768);

  useEffect(() => {
    if (isBreakpoint) {
      navigate("/");
    } else {
      navigate("/m");
    }
  }, [isBreakpoint]);
  return (
    <Fragment>
      <div className="App">
        <Routes>
          <Route exact path="*" element={<Desktop />} />
          <Route exact path="/m" element={<Mobile />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
