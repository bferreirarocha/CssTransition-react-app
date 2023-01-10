import { useState } from "react";

import { Styles } from "../../../types/Styles";
import { translate } from "../../../i18n/picker";

function Main({ style }) {
  const [animate, setAnimate] = useState(true);

  // eslint-disable-next-line default-case

  // eslint-disable-next-line default-case
  switch (style) {
    case Styles.RdnCover:
      return (
        <ul>
          <li
            className={`title ${animate ? "startAnimation" : ""}`}
            dangerouslySetInnerHTML={{
              __html: translate("Cover", "title"),
            }}
          ></li>
          <li
            // className="subtitle animate"
            className={`subtitle ${animate ? "startAnimation" : ""}`}
            dangerouslySetInnerHTML={{
              __html: translate("Cover", "subtitle"),
            }}
          ></li>
          <li
            // className="description animate"
            className={`description ${animate ? "startAnimation" : ""}`}
            dangerouslySetInnerHTML={{
              __html: translate("Cover", "description"),
            }}
          ></li>
          <button
            onClick={() => {
              // alert(searchParams.get("cover"));
            }}
          >
            {}
            learn more!
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.248 85.248">
              <path
                d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                transform="translate(10.208 10.208)"
                fill="#000000"
              />
            </svg>
          </button>
        </ul>
      );
    case Styles.CaloriesCover:

    case Styles.BeautyCover:
  }
}

export default Main;
