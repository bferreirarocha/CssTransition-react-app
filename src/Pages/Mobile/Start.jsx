import React from "react";
import clock from "../../images/clock.svg";
import doctor from "../../images/doctor.svg";
import calendar from "../../images/calendar.svg";
import { useInView } from "react-intersection-observer";

function Start() {
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
    <section className={`Feature Start`}>
      <header>
        <h1>
          Start Diet <br />
          <span>is easy!</span>
        </h1>
      </header>
      <main>
        <ul className={`container`}>
          <li ref={listRef2} className={`${listVisible2 ? "startAnimation" : ""}`}>
            <img src={doctor} />
            <div className='title'>
              Get in touch with <b>real dietitians</b>
            </div>
            <div className='paragraph'>
              We have a huge <span></span>
              professional community composed by <span>RDN</span> (Registed Dietitian Nutritionist ){" "}
              <br /> <br /> <span>Get in touch with them </span>
              to start learning about diet and nutrition and avoid <span>Medical Fake News!</span>
            </div>
          </li>
          <li ref={listRef1} className={`${listVisible1 ? "startAnimation" : ""}`}>
            <img src={calendar}></img>
            <div className='title'>Create your diet Project</div>
            <div className='paragraph'>
              We have templates for many diet's goals made by dietitians! <br />
              Just pick a<span> template </span> for your <span> diet target! </span>
              <br /> You will be contacted by the best dietitians near you,
              <span> those based in your town</span>!
            </div>
          </li>
          <li ref={listRef3} className={`${listVisible3 ? "startAnimation" : ""}`}>
            <img src={clock}></img>
            <div className='title'>
              Eat the right food <br /> at the right time.
            </div>
            <div className='paragraph'>
              We will suggest you the <span>right food to eat, </span>
              <span>each day, each meal </span>
              for the entire project. <br />
              <br />
              If you make mistakes, don't worry! We will <span>"readapt"</span> everything based on{" "}
              <span>"your taste & budget".</span>
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
}

export default Start;
