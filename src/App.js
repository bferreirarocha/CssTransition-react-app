import logo from "./logo.svg";
import "./App.scss";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Desktop from "./Pages/Desktop/Index.jsx";
import Mobile from "./Pages/Mobile/Index.jsx";

function App() {
  const [animation, setanimation] = useState("slideOut");
  const [mode, setMode] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handlerResize() {
      if (window.innerWidth > 768) {
        setMode(true);
      } else {
        setMode(false);
      }
    }
    window.addEventListener("resize", handlerResize);
  });
  if (mode) {
    return <Desktop></Desktop>;
  } else {
    <Mobile></Mobile>;
  }
}

export default App;
