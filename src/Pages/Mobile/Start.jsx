import React from "react";
import clock from "../../images/clock.svg";
import doctor from "../../images/doctor.svg";
import calendar from "../../images/calendar.svg";
function Start() {
  return (
    <section className="Feature Start">
      <header>
        <h1>
          Start Diet <br />
          <span>is easy!</span>
        </h1>
      </header>
      <main>
        <ul className="container">
          <li>
            <img src={clock}></img>
            <div className="title">Pick a diet template.</div>
            <div className="paragraph">
              We have templates for many diet's goals made by dietitians!
              <span>
                <br /> Just pick a template for
              </span>
              <span>your diet target and follow the steps.</span>
            </div>
          </li>
          <li>
            <img src={doctor} />
            <div className="title">Get in touch with Real dietitians</div>
            <div className="paragraph">
              We have a huge <span></span>
              professional community composed by{" "}
              <span>
                dietitian & nutritionist. <br />{" "}
              </span>
              <span>Get in touch with them </span>
              and start learning about diet and nutrition and avoid medical{" "}
              <span>Fake News!</span>
            </div>
          </li>
          <li>
            <img src={calendar}></img>
            <div className="title">Eat right food at the right time.</div>
            <div className="paragraph">
              We will suggest you the <span>right food to eat, </span>
              <span>each day, at each meal </span>
              for the entire project.
              <span>
                <br /> Get in touch
              </span>
              &nbsp; with them with them and start learning about diet and
              nutrition and avoid medical <span> Fake News!</span>
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
}

export default Start;
