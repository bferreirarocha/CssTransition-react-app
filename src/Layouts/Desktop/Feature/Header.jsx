import React from "react";
import { translate } from "../../../i18n/picker";

function Header() {
  return (
    <div
      className=""
      dangerouslySetInnerHTML={{
        __html: translate("Welcome", "title"),
      }}
    ></div>
  );
}

export default Header;
