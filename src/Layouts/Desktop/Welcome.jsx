import { React, useState, useEffect } from "react";
import { translate } from "../../i18n/picker";

function Welcome({ NaviateTo }) {
  const [slideEffect, setSlideEffect] = useState(false);
  useEffect(() => {
    setSlideEffect(true);
    return () => {
      setSlideEffect(false);
    };
  }, []);
  return (
    <div
      className={`Welcome Content ${slideEffect ? "SlideEnter" : ""}`}
      onWheel={NaviateTo}
    >
      <div
        className="title"
        dangerouslySetInnerHTML={{ __html: translate("Welcome", "title") }}
      ></div>

      <div className="paragraph1">
        <div
          class="line"
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
      <div className="list">
        <span
          dangerouslySetInnerHTML={{
            __html: translate("Welcome", "list")[0],
          }}
        ></span>
        <span
          dangerouslySetInnerHTML={{
            __html: translate("Welcome", "list")[1],
          }}
        ></span>
        <span
          dangerouslySetInnerHTML={{
            __html: translate("Welcome", "list")[2],
          }}
        ></span>
      </div>
      <button
      //onClick={NaviateTo}
      >
        {translate("Welcome", "button")}

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.248 85.248">
          <path
            d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
            transform="translate(10.208 10.208)"
            fill="#e4ff26"
          />
        </svg>
      </button>
    </div>
  );
}

export default Welcome;
