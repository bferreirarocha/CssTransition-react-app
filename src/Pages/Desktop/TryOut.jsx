import { React, useState } from "react";
import { translate } from "../../i18n/picker";
import calendarFood from "../../images/calendarFood.svg";
import clockW from "../../images/clockW.svg";
import locationW from "../../images/locationW.svg";
import ScrollNavigator from "../../components/ScrollNavigator/ScrollNavigator";

function TryOut({ NaviateTo }) {
  function sendEmail() {
    window.location = "mailto:info@eat-project.com";
  }
  //const [slideEffect, setSlideEffect] = useState(false);

  const [slideOut, setSlideOut] = useState(false);
  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      setSlideOut(true);
    }
    NaviateTo(e.deltaY);
  };

  return (
    <section
      className={`TryOut Content ${slideOut ? "SlideExit" : ""}`}
      onWheel={WheelHandler}
    >
      <header>
        <div
          dangerouslySetInnerHTML={{
            __html: translate("TryOut", "title"),
          }}
        ></div>
        <span>Let’s resume ...</span>
      </header>
      <main>
        <div className="body">
          <div className="row firstRow">
            <div className="group firstTransition">
              <div className="cover">
                <img src={calendarFood} />
              </div>
              <span>Eat right</span>
            </div>
            <div className="group secondTransition">
              <div className="cover">
                <img src={clockW} />
              </div>
              <span>Every moment</span>
            </div>
            <div className="group thirdTransition">
              <div className="cover">
                <img src={locationW} />
              </div>
              <span>Everywhere</span>
            </div>
          </div>
          <div className="row secondRow">
            <div className="group">
              <div className="what">
                <span>Try now!</span>
                <span>It's completely free.</span>
              </div>
            </div>
            <div className="group">
              <button>Start</button>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="group">
            {/* <span @click="$emit('changePage', 8)">About us</span> 
                 <span @click="$emit('changePage', 9)">Contact us</span>  */}
            <span onClick={sendEmail}>Contact us</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>
          <div className="group">
            <span>Copyright © {new Date().getFullYear()}, Eat-project</span>
          </div>
        </div>
        <ScrollNavigator index={6} />
      </main>
    </section>
  );
}

export default TryOut;
