import { React, useState, useEffect } from "react";
import { translate } from "../../i18n/picker";
import ScrollNavigator from "../../components/ScrollNavigator/ScrollNavigator";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

function Welcome({ NaviateTo, effect }) {
  const [slideOut, setSlideOut] = useState(false);
  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      setSlideOut(true);
      NaviateTo(1);
    } else {
      NaviateTo(-1);
    }
  };
  const clickhandler = () => {
    NaviateTo(1);
    setSlideOut(true);
  };
  return (
    <div
      className={`Welcome Content ${slideOut ? "SlideExit" : ""}`}
      onWheel={WheelHandler}
    >
      <div
        className="title"
        dangerouslySetInnerHTML={{ __html: translate("Welcome", "title") }}
      ></div>

      <div className="paragraph1">
        <div
          className="line"
          dangerouslySetInnerHTML={{
            __html: translate("Welcome", "lines1")[0],
          }}
        ></div>
        <div
          className="line"
          dangerouslySetInnerHTML={{
            __html: translate("Welcome", "lines1")[1],
          }}
        ></div>
      </div>
      <div
        className="paragraph2"
        dangerouslySetInnerHTML={{
          __html: translate("Welcome", "lines2"),
        }}
      ></div>
      <ul className="list">
        <li
          dangerouslySetInnerHTML={{
            __html: translate("Welcome", "list")[0],
          }}
        ></li>
        <li
          dangerouslySetInnerHTML={{
            __html: translate("Welcome", "list")[1],
          }}
        ></li>
        <li
          dangerouslySetInnerHTML={{
            __html: translate("Welcome", "list")[2],
          }}
        ></li>
      </ul>
      <div className="button">
        <button onClick={clickhandler}>
          {translate("Welcome", "button")}

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.248 85.248">
            <path
              d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
              transform="translate(10.208 10.208)"
              fill="#00bbff"
            />
          </svg>
        </button>
      </div>
      <ScrollNavigator index={1} />
    </div>
  );
}

export default Welcome;
