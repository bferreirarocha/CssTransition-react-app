import React from "react";
import Cover from "./components/1Cover";
import Welcome from "./components/2Welcome";
import Start from "./components/3Start";
import OnTheGo from "./components/4OnTheGo";
import Rdn from "./components/5Rdn";
import TryNow from "./components/6TryNow";
import "./Mobile.scss";

function Layout() {
  return (
    <div className="Mobile">
      <Cover />
      <Welcome />
      <Start />
      <OnTheGo />
      <Rdn />
      <TryNow />
    </div>
  );
}

export default Layout;
