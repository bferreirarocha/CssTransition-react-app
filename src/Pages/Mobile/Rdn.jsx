import React from "react";
import phone from "../../images/phone.svg";
import calendarB from "../../images/calendarB.svg";
import chip from "../../images/chip.svg";
import { translate } from "../../i18n/picker";
function Rdn() {
  return (
    <section className="Feature Rdn">
      <header>
        <h1>
          Are you a RDN?{" "}
          <span>
            {" "}
            <br /> Registed Dietian Nutritionist
          </span>
        </h1>
      </header>
      <main>
        <ul className="container">
          <li>
            <img src={phone}></img>
            <div className="title">
              <div className="copy1">Pick a diet</div>

              <span>template.</span>
            </div>
            <div className="description">
              <div className="paragraph">
                We have diet templates for many goals made by <span>real</span>
                <span>dietitians!</span>
              </div>
              <div className="paragraph">
                <span>Just pick a template for</span>
                <span>your diet target</span>
                and follow the steps.
              </div>
            </div>
          </li>
          <li>
            <img src={calendarB}></img>
            <div className="title">
              Get in touch with
              <span>dietitians</span>
            </div>
            <div className="description">
              <div className="paragraph">
                We have the <span>biggest</span>
                <span>dietitian & nutritionist</span>
                <span>community</span>
                in the world.
              </div>
              <div className="paragraph">
                <span>Get in touch with them</span>
              </div>
              diet and nutrition.
            </div>
          </li>
          <li>
            <img src={chip}></img>
            <div className="title">
              <div className="line">
                Eat <span>right food</span>
              </div>
              <div className="line">
                at the <span>right time.</span>
              </div>
            </div>
            <div className="description">
              <div className="paragraph">
                <div className="line">We will suggest you</div>
                <div className="line">
                  the <span>right food to eat,</span>
                </div>

                <div className="line">
                  <span>each day, at each meal</span>
                </div>
                <div className="line">for the entire project.</div>
              </div>
              <div className="paragraph">
                <div className="line">If you make mistakes,</div>
                <div className="line">don't worry!</div>
                <div className="line">
                  <span>We will readapt</span> everything
                </div>
                <div className="line">
                  based on: <span>"your taste & budget."</span>
                </div>
                <div className="line"></div>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
}

export default Rdn;
