import React from "react";
import { translate } from "../../../i18n/picker";

function Main() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: translate(),
      }}
    ></div>
  );
}

export default Main;
