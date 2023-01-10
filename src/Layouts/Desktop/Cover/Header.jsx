import React from "react";
import Logo from "../../../images/logo2.svg";

function Header({ style }) {
  // eslint-disable-next-line default-case
  return (
    <div>
      <img src={Logo} />
    </div>
  );
}

export default Header;
