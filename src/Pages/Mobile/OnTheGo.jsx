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
            <div className="title">
              <div className="copy1">Pick a diet template.</div>
            </div>

            <div className="description">
              <div className="paragraph">
                We have diet templates for many goals made by <span>real</span>
                <span>dietitians!</span>
              </div>
              <div className="paragraph">
                <span>Just pick a template for</span>

                <span>your diet target</span>

                <div className="line">and follow the steps.</div>
              </div>
            </div>
          </li>
          <li>
            <img src={food}></img>
            <div className="title">
              <div className="copy1">Get in touch with dietitians</div>
            </div>
            <div className="paragraph">
              We have the <span>biggest </span>
              <span>dietitian & nutritionist </span>
              <span>community </span>
              in the world.
            </div>
            <div className="paragraph">
              <span>Get in touch with them</span>
              and start learning about diet and nutrition.
            </div>
          </li>
          <li>
            <img src={delivery}></img>
            <div className="title">
              <div className="copy1">Eat right food</div>
              at theright time.
            </div>
            <div className="paragraph">
              We will suggest you the <span>right food to eat, </span>
              <span>each day, at each meal </span>
              for the entire project.
            </div>
            <div className="paragraph">
              If you make mistakes, don't worry!
              <span>
                {" "}
                <br /> We will readapt
              </span>{" "}
              everything based on:
              <span>"your taste & budget."</span>
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
}

export default OnTheGo;
