import { useState, useEffect } from "react";
import { translate } from "../../../i18n/picker";
import { selectCover, selectLaguage } from "../../../Redux/cover/slicer";
import { useSelector } from "react-redux";

function Main({ style, NaviateTo }) {
  const [animate, setAnimate] = useState(true);
  const [loadMain, setLoadMain] = useState(false);
  const language = useSelector(selectLaguage);

  // console.log("Main:" + style);
  const clickhandler = () => {
    NaviateTo(1);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoadMain(true);
    }, 1000);

    return () => {};
  }, []);

  if (loadMain) {
    return (
      <ul>
        <li
          className={`title ${animate ? "startAnimation" : ""}`}
          dangerouslySetInnerHTML={{
            __html: translate(language, "Cover", style)[0]["title"],
          }}
        ></li>
        <li
          // className="subtitle animate"
          className={`subtitle ${animate ? "startAnimation" : ""}`}
          dangerouslySetInnerHTML={{
            __html: translate(language, "Cover", style)[1]["subtitle"],
          }}
        ></li>
        <li
          // className="description animate"
          className={`description ${animate ? "startAnimation" : ""}`}
          dangerouslySetInnerHTML={{
            __html: translate(language, "Cover", style)[2]["description"],
          }}
        ></li>
        <button onClick={clickhandler}>
          learn more!
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85.248 85.248'>
            <path
              d='M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z'
              transform='translate(10.208 10.208)'
              fill='#000000'
            />
          </svg>
        </button>
      </ul>
    );
  }
}

export default Main;
