import React from "react";
import phone from "../../images/phone.svg";
import calendarB from "../../images/calendarB.svg";
import robot from "../../images/Robot.svg";
import { translate } from "../../i18n/picker";
function Rdn() {
  return (
    <section className="Feature Rdn">
      <header>
        <h1>
          <span>
            {" "}
            Are you a RDN? <br />{" "}
          </span>
          Registered <br />
          Dietitian <br />
          Nutritionist <br />
        </h1>
      </header>
      <main>
        <ul className="container">
          <li>
            <img src={phone}></img>
            <div className="title">
              <div className="line">
                <span>Propose diet ideas</span>
              </div>
            </div>

            <div className="paragraph">
              <div className="line">
                There are many people <br /> in your town looking for <br />{" "}
                diet help.
              </div>
            </div>
            <div className="paragraph">
              <div className="line">
                They are looking for
                <span> real diet advice. </span>
              </div>
            </div>
            <div className="paragraph">
              <div className="line">
                <span>Be hired by them </span> <br /> and lead their diet
                projects.
              </div>
            </div>
          </li>
          <li>
            <img src={calendarB}></img>
            <div className="title">
              <div className="line">
                <span>Create diet Projects</span>
              </div>
            </div>
            <div className="paragraph">
              <div className="line">
                <span>
                  {" "}
                  Your ideas can inspire <br /> many people.
                </span>{" "}
                <br />
                You can collaborate in <br /> nutrition team projects <br />{" "}
                with: <br />
                <span>
                  {" "}
                  doctors, chefs, <br /> companies and bloggers.{" "}
                </span>{" "}
              </div>
            </div>
          </li>
          <li>
            <img src={robot} style={{ width: "36vw" }}></img>
            <div className="title">
              <div className="line">
                {" "}
                <span>
                  {" "}
                  Let machines <br /> work for you
                </span>
              </div>
            </div>

            <div className="description">
              <div className="paragraph">
                <div className="line">Stop building diet meals manually!</div>
              </div>
              <div className="paragraph">
                <div className="line">
                  <span> Machine Learning</span> will <br /> collect & sort the
                  best <br /> recipes for your patients' plans.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
}

export default Rdn;
