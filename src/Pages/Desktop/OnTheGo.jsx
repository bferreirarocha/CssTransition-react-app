import { React, useState, useEffect } from "react";
import location from "../../images/location.svg";
import food from "../../images/food.svg";
import delivery from "../../images/delivery.svg";
import { translate } from "../../i18n/picker";

function OnTheGo({ style, NaviateTo }) {
  //const [slideEffect, setSlideEffect] = useState(false);
  useEffect(() => {}, []);

  const [slideOut, setSlideOut] = useState(false);
  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      setSlideOut(true);
    }
    NaviateTo(e.deltaY);
  };
  return (
    <section
      className={`Feature Content OnTheGo ${slideOut ? "SlideExit" : ""}`}
      onWheel={WheelHandler}
    >
      <header>
        {/* <HeaderContent style={style} />  */}
        <div
          dangerouslySetInnerHTML={{
            __html: translate("Start", "title"),
          }}
        ></div>
      </header>
      <main>
        <ul className="body">
          <li className="group">
            <img src={location} />
            <div className="title">
              {/* <div className="copy1">Diet</div> */}
              <div className="line">
                <span>Diet follows you.</span>
              </div>
            </div>
            <div className="description">
              <div className="paragraph">
                <div className="line">We have diet templates for</div>
                <div className="line">
                  many goals made by <span>real</span>
                </div>
                <div className="line">
                  <span>dietitians!</span>
                </div>
              </div>
              <div className="paragraph">
                <div className="line">
                  <span>Just pick a template for</span>
                </div>
                <div className="line">
                  <span>your diet target</span>
                </div>
                <div className="line">and follow the steps.</div>
              </div>
            </div>
          </li>
          <li className="group">
            <img src={food} />
            <div className="title">
              <div className="line">Get in touch with</div>
              <div className="line">
                <span>dietitians</span>
              </div>
            </div>
            <div className="description">
              <div className="paragraph">
                <div className="line">
                  We have the <span>biggest</span>
                </div>
                <div className="line">
                  <span>dietitian & nutritionist</span>
                </div>
                <div className="line">
                  <span>community</span>
                </div>
                <div className="line">in the world.</div>
              </div>
              <div className="paragraph">
                <div className="line">
                  <span>Get in touch with them</span>
                </div>
                <div className="line">and start learning about</div>
                <div className="line">diet and nutrition.</div>
              </div>
            </div>
          </li>
          <li className="group">
            <img src={delivery} />
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
                  <span>each day, each meal</span>
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

export default OnTheGo;
