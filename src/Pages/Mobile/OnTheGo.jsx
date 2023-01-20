import React from "react";
import location from "../../images/location.svg";
import food from "../../images/food.svg";
import delivery from "../../images/delivery.svg";
import { translate } from "../../i18n/picker";
function OnTheGo() {
  return (
    <section className="Feature OnTheGo">
      <header>
        <h1>
          Stay on Dietian <br /> <span> On The Go</span> !
        </h1>
      </header>
      <main>
        {" "}
        <ul className="container">
          <li>
            <img src={location}></img>
            <div className="title">Diet follows you!</div>

            <div className="description">
              <div className="paragraph">
                <div className="line">
                  Don't mess up your diet <br /> because you're not home!
                </div>
              </div>
              <div className="paragraph">
                <div className="line">
                  Are you on vacation,
                  <br /> business trip or
                  <br /> out for dinner? <br /> <br />
                </div>
                <div className="line">
                  We will help you find the,
                  <br /> <span> best choice On-the-Go!</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src={food}></img>
            <div className="title">
              <div className="copy1">Get in touch with dietitians</div>
            </div>

            <div className="paragraph">
              <div className="line">
                We'll show you the best <br /> place to find your diet menu.
              </div>
              <div className="line">
                We collaborate with{" "}
                <span>
                  healthy restaurants, <br /> bars & hotels
                </span>
              </div>
            </div>
          </li>
          <li>
            <img src={delivery}></img>
            <div className="title">
              <div className="copy1">Eat right food</div>
              at theright time.
            </div>
            <div className="paragraph">
              <div className="line">
                Are you home and don't <br /> want to cook <br /> or are you in
                the office?
              </div>
            </div>
            <div className="paragraph">
              <div className="line">
                We will link your diet plan <br /> to{" "}
                <span> Healthy Food Delivery</span> <br />
                services in your area.{" "}
              </div>
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
}

export default OnTheGo;
