import { React, useState } from "react";
import { translate } from "../../i18n/picker";
import Onemillion from "../../images/1million.svg";
import center from "../../images/center.svg";
import i30k from "../../images/30k.svg";
import i20k from "../../images/20k.svg";
function StayOnDiet({ NaviateTo }) {
  //const [slideEffect, setSlideEffect] = useState(false);

  const [slideOut, setSlideOut] = useState();
  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      setSlideOut(true);
    } else if (e.deltaY < 0) {
      setSlideOut(false);
    }
    NaviateTo(e.deltaY);
  };
  return (
    <section
      className={`StayOnDiet Content ${slideOut ? "SlideExit" : ""}`}
      onWheel={WheelHandler}
    >
      <header>
        <div
          dangerouslySetInnerHTML={{
            __html: translate("StayOnDiet", "title"),
          }}
        ></div>
      </header>
      <main>
        <div className="body">
          <div className="row">
            <div className="item">
              <img className="firstAnimation" src={Onemillion} />
            </div>
            <div className="item center">
              <img className="fourthAnimation" src={center} />
            </div>
            <div className="item">
              <img className="secondAnimation" src={i30k} />
            </div>
          </div>
          <div className="row">
            <div className="item">
              <img className="thirdAnimation" src={i20k} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default StayOnDiet;
