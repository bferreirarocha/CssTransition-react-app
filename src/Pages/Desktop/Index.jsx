import { React, useState } from "react";
import { Cover, Welcome, Start, OnTheGo, Rdn, TryNow } from "./index";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Desktop({ animationProp, ChangePageProp }) {
  const [animation, setanimation] = useState("slideOut");
  const [animate, setAnimate] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const ChangePage = ({ pathname, animationProp }) => {
    navigate(pathname);
  };
  const stopAnimation = () => {
    setanimation(false);
  };
  return (
    <TransitionGroup className="App">
      <CSSTransition
        timeout={700}
        in={animate}
        key={location.key}
        unmountOnExit
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <Cover
                ChangePage={ChangePage}
                nextPath={"/Welcome"}
                stopAnimation={stopAnimation}
              />
            }
          ></Route>
          <Route
            path="/Welcome"
            element={
              <Welcome
                ChangePage={ChangePage}
                nextPath={"/Start"}
                stopAnimation={stopAnimation}
              />
            }
          ></Route>
          <Route
            path="/Start"
            element={<Start ChangePage={ChangePage} nextPath={"/OnTheGo"} />}
          ></Route>
          <Route
            path="/OnTheGo"
            element={<OnTheGo ChangePage={ChangePage} nextPath={"/Rdn"} />}
          ></Route>

          <Route
            path="/Rdn"
            element={<Rdn ChangePage={ChangePage} nextPath={"/TryNow"} />}
          ></Route>
          <Route
            path="/TryNow"
            element={<TryNow ChangePage={ChangePage} nextPath={"/"} />}
          ></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Desktop;
