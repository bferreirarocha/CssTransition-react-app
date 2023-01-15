import React from "react";
import { translate } from "../../i18n/picker";
import calendarFood from "../../images/calendarFood.svg";
import clockW from "../../images/clockW.svg";
import locationW from "../../images/locationW.svg";
function TryOut() {
  return (
    <section className="TryOut">
      <header>
        <h1>
          Ok... <br></br> It’s time to eat!
        </h1>
        <span>Let’s resume ...</span>
      </header>
      <main>
        <div className="groups ">
          <div className="group firstTransition">
            <img src={calendarFood} />
            <div className="information">
              <div className="line">Eat right</div>
            </div>
          </div>
          <div className="group secondTransition">
            <img src={clockW} />
            <div className="information">
              <div className="line">Every moment.</div>
            </div>
          </div>
          <div className="group thirdTransition">
            <img src={locationW} />
            <div className="information">
              <div className="line">Everywhere.</div>
            </div>
          </div>
        </div>
        <div className="offer startAnimation">
          <div className="now">Try now!</div>
          <div className="free">It's completely free.</div>
          <div className="start">Start</div>
        </div>

        <input type="email" name="email" id="email" />
      </main>
    </section>
  );
}

export default TryOut;
