import { React, useState, useEffect } from "react";
import phone from "../../images/phone.svg";
import collaboration from "../../images/collaboration.svg";
import chip from "../../images/chip.svg";
import robot from "../../images/Robot.svg";
import { translate } from "../../i18n/picker";
import ScrollNavigator from "../../components/ScrollNavigator/ScrollNavigator";

function Rdn({ style, NaviateTo, effect }) {
  //const [slideEffect, setSlideEffect] = useState(false);
  useEffect(() => {}, []);

  const [slideOut, setSlideOut] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      setSlideOut(true);
      NaviateTo(1);
    } else if (e.deltaY < 0) {
      // setSlideOut(true);
      NaviateTo(-1);
    }
  };
  return (
    <section
      // className={`Feature Content Rdn ${slideOut ? "SlideExit" : ""} `}
      className={`Feature Content Rdn ${effect} ${slideOut ? "SlideExit" : ""}`}
      onWheel={WheelHandler}
    >
      <header>
        <h1>
          Are you a <b>"RDN"</b>?{" "}
          <span style={{ color: "#e4ff26" }}>Registered Dietitian Nutritionist</span>
        </h1>
      </header>
      <main>
        <ul className='body'>
          <li className='group'>
            <img src={phone} />
            <div className='title'>
              {/* <div className="copy1">Diet</div> */}
              <div className='line'>
                <span>Enrich diet content</span>
              </div>
            </div>
            <div className='description'>
              <div className='paragraph'>
                <div className='line'>
                  There are many people <br /> in your town looking for
                  <br />
                  real <span>diet advice </span> diet help.
                </div>
                They are looking for
                <span> real diet advice. </span>
              </div>

              <div className='paragraph'>
                <div className='line'>
                  <span>Communicate, share and edit content.</span> <br /> Doing so, you will lead
                  people
                  <br /> into a real diet education.
                </div>
              </div>
            </div>
          </li>
          <li className='group'>
            <img src={collaboration} />
            <div className='title'>
              <div className='line'>
                <span>
                  You LEAD <br /> FOOD projects !
                </span>
              </div>
            </div>
            <div className='description'>
              <div className='paragraph'>
                <div className='line'>
                  As a <span>RDN</span> , you are the <span>Food Scientist!</span> <br />
                  You can lead and design <br /> nutrition's projects composed by:
                  <br />
                  <span>
                    {" "}
                    doctors, chefs, <br /> companies, bloggers <br /> & Personal Trainers.{" "}
                  </span>{" "}
                </div>
              </div>
            </div>
          </li>
          <li className='group'>
            <img src={robot} />
            <div className='title'>
              <div className='line'>
                {" "}
                <span>
                  {" "}
                  Let machines <br /> work for you
                </span>
              </div>
            </div>
            <div className='description'>
              <div className='paragraph'>
                <div className='line'>Stop building diet meals manually!</div>
              </div>
              <div className='paragraph'>
                <div className='line'>
                  <span> Machine Learning</span> will <br /> collect & sort the best <br /> recipes
                  for your patients' plans.
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ScrollNavigator index={4} />
      </main>
    </section>
  );
}

export default Rdn;
