import React from "react";
import phone from "../../images/phone.svg";
import collaboration from "../../images/collaboration.svg";
import robot from "../../images/Robot.svg";
import { translate } from "../../i18n/picker";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
function Rdn() {
  const { ref: listRef1, inView: listVisible1 } = useInView({
    triggerOnce: true,
  });
  const { ref: listRef2, inView: listVisible2 } = useInView({
    triggerOnce: true,
  });
  const { ref: listRef3, inView: listVisible3 } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={`Feature Rdn`}>
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
        <ul className={`container`}>
          <li ref={listRef1} className={`${listVisible1 ? "startAnimation" : ""}`}>
            <img src={phone}></img>
            <div className='title'>
              <div className='line'>
                <span>Enrich diet content</span>
              </div>
            </div>

            <div className='paragraph'>
              <div className='line'>
                There are many people <br /> in your town looking for <br /> diet help.
              </div>
            </div>
            <div className='paragraph'>
              <div className='line'>
                They are looking for
                <span> real diet advice. </span>
              </div>
            </div>
            <div className='paragraph'>
              <div className='line'>
                <span>Communicate, share and edit content.</span> <br /> Doing so, you will lead
                people
                <br /> into a real diet education.
              </div>
            </div>
          </li>
          <li ref={listRef2} className={`${listVisible2 ? "startAnimation" : ""}`}>
            <img src={collaboration}></img>
            <div className='title'>
              <div className='line'>
                <span>
                  You LEAD <br /> FOOD projects !
                </span>
              </div>
            </div>
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
          </li>
          <li ref={listRef3} className={`${listVisible3 ? "startAnimation" : ""}`}>
            <img src={robot} style={{ width: "36vw" }}></img>
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
      </main>
    </section>
  );
}

export default Rdn;
